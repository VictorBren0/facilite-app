import React, { useState, useContext, useEffect } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    Dimensions,
    FlatList,
    PermissionsAndroid,
    ActivityIndicator,
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';
import { postFiles, deleteFolder, getOneFolders } from '../../../services/Api';
import FilesCard from '../../../components/FilesCard';
import DocumentPicker from 'react-native-document-picker';
import { AuthContext } from '../../../context';

const windowWidth = Dimensions.get('window').width;
const itemWidth = windowWidth / 3;

export default function Folder({ navigation }) {
    const route = useRoute();
    const { userToken, userParams } = useContext(AuthContext);
    const [data, setData] = useState(route.params?.data);
    const [file, setFile] = useState([]);
    const [result, setResult] = useState(null);
    const [showConfirmButton, setShowConfirmButton] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [listFiles, setListFiles] = useState([]);


    const getFiles = async () => {
        try {
            const response = await getOneFolders(userToken, userParams, data.id);
            setListFiles(response);
            console.log('response', response);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getFiles();
      }, []);

    useEffect(() => {
        if (result && file) {
            setFile(result);
        }
        setShowConfirmButton(!!result);
    }, [result, file]);

    const handleError = (err) => {
        if (DocumentPicker.isCancel(err)) {
            // User cancelled the picker, exit any dialogs or menus and move on
        } else if (DocumentPicker.isInProgress(err)) {
            console.warn('Multiple pickers were opened, only the last will be considered');
        } else {
            throw err;
        }
    };

    const handleAddFile = async () => {
        if (!file[0] || !file[0].uri || !file[0].type || !file[0].name) {
            alert('Selecione um arquivo válido');
            return;
        }

        const formData = new FormData();
        formData.append('file', {
            uri: file[0].uri,
            type: file[0].type,
            name: file[0].name,
        });
        formData.append('nome', `${file[0].name}`);
        formData.append('descricao', 'teste');

        try {
            setIsLoading(true); // Set isLoading to true before making the API request

            console.log('formData', formData);

            await postFiles(userToken, userParams, data.id, formData);
            alert('Arquivo adicionado com sucesso');
            setResult(null);
            await getFiles();
        } catch (error) {
            console.log(error);
            alert('Erro ao adicionar o arquivo');
        } finally {
            setIsLoading(false); // Set isLoading to false after the API request is completed
        }
    };

    useEffect(() => {
        requestStoragePermission();
    }, []);

    const requestStoragePermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Permissão para acessar as imagens',
                    message:
                        'O aplicativo precisa da sua permissão para acessar as imagens armazenadas no dispositivo.',
                    buttonNeutral: 'Pergunte-me depois',
                    buttonNegative: 'Cancelar',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Permissão concedida');
            } else {
                console.log('Permissão negada');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const handleSelectFile = async () => {
        try {
            const pickerResult = await DocumentPicker.pickSingle({
                presentationStyle: 'fullScreen',
                copyTo: 'cachesDirectory',
            });
            setResult([pickerResult]);
        } catch (e) {
            handleError(e);
        }
    };

    const renderFileItem = ({ item }) => (
        <TouchableOpacity key={item.id} style={[styles.contentFolders, { width: itemWidth }]}>
            <FilesCard posterPath={item.file} text={item.nome} />
        </TouchableOpacity>
    );
      
    const handleDelete = async () => {
        if (!data.id) {
            alert('Error');
            return;
        }
        try {
            await deleteFolder(userToken, userParams, data.id);
            alert('Pasta deletada com sucesso!');
            navigation.goBack();
        } catch (error) {
            console.log(error);
            alert('Erro ao deletar a pasta');
        }
    }
       

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentHeader}>
                <View style={styles.contentBack}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={30} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContent}>
                    <Text style={styles.titleHeader}>{data.nome}</Text>
                </View>

                <View style={styles.contentIcon}>
{/*                     <TouchableOpacity
                        style={{ marginBottom: 15 }}
                        onPress={() => alert('Edit button pressed')}
                    >
                        <Icon name="edit" size={30} color="#FFFFFF" />
                    </TouchableOpacity> */}
                    <TouchableOpacity onPress={handleDelete}>
                        <Icon name="delete" size={30} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={listFiles.arquivos}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => String(index)}
                numColumns={3}
                renderItem={renderFileItem}
                ListEmptyComponent={() => <Text style={styles.emptyMessage}>Vazio</Text>}
            />
            <View style={styles.containerButton}>
                {showConfirmButton && (
                    <TouchableOpacity style={styles.confirmButton} onPress={handleAddFile}>
                        {isLoading ? ( // Display the ActivityIndicator while loading
                            <ActivityIndicator size="small" color="white" />
                        ) : (
                            <Icon name="done" size={25} color="white" />
                        )}
                    </TouchableOpacity>
                )}
                <TouchableOpacity style={styles.button} onPress={handleSelectFile}>
                    <Icon name="note-add" size={35} color="white" />
                </TouchableOpacity>
            </View>
    </SafeAreaView >
  );
}
