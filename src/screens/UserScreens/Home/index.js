import React, { useState, useContext, useEffect, createRef } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    Modal,
    Button,
    TextInput,
    FlatList,
    Dimensions,

} from 'react-native';

import styles from './styles';
import CircleProgress from '../../../components/CircleProgress';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../../../components/SearchBar';
import { AuthContext } from '../../../context';
import { getFolders, postFolders } from '../../../services/Api';


const windowWidth = Dimensions.get('window').width; // Obtenha a largura da tela
const itemWidth = windowWidth / 3; // Calcule a largura de cada item com base na largura da tela


export default function Home({ navigation }) {
    const [searchResults, setSearchResults] = useState([]);
    const [folders, setFolders] = useState([]);
    const [visible, setVisible] = useState(false)
    const [newFolder, setNewFolder] = useState(null)


    const { logout, userToken, userParams } = useContext(AuthContext);
    const newFolderInput = createRef();


    const getFolder = async () => {
        try {
            const response = await getFolders(userToken, userParams);
            setFolders(response);
            console.log('response', response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFolder();
    }, []);

    const handlePostFolder = async () => {
        if (!newFolder) {
            alert('Digite o nome da pasta');
            return;
        }
        try {
            await postFolders(userToken, userParams, newFolder);
            alert('Pasta adicionada com sucesso');
            await getFolder();
        } catch (error) {
            console.log(error);
            alert('Erro ao adicionar pasta');
        }
    };

    const handleSearch = (text) => {
        const filteredFolders = folders.pastas.filter((folder) =>
            folder.nome.toLowerCase().includes(text.toLowerCase())
        );
        setSearchResults(filteredFolders);
    };

    let formattedSize = 0; // Defina um valor padrão para evitar erros
    let letter = 'B'; // Defina um valor padrão para evitar erros

    if (folders.tamanhoTotalFormatado) {
        letter = folders.tamanhoTotalFormatado.split(' ')[1]; // Obtém a parte com a letra

        if (letter === 'B') {
            formattedSize = parseInt(folders.tamanhoTotalFormatado) * 0.001
        } else if (letter === 'K') {
            formattedSize = parseFloat(folders.tamanhoTotalFormatado) * 0.001;
        } else if (letter === 'M') {
            formattedSize = parseFloat(folders.tamanhoTotalFormatado);
        }
    }




    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentHeader}>
                <TouchableOpacity style={styles.contentLogout} onPress={logout}>
                    <Text style={styles.textLogout}>Sair</Text>
                    <Icon name={'logout'} size={30} color={'#CC0000'} />
                </TouchableOpacity>
                <CircleProgress percentage={formattedSize} letter={letter} />
            </View>
            <View style={styles.contentIcon}>
                <TouchableOpacity onPress={() => {
                    setVisible(true);
                }}>
                    <Icon name={'create-new-folder'} size={40} color={'#000000'} />
                </TouchableOpacity>
            </View>
            <SearchBar onSearch={handleSearch} />
            <View style={styles.contentTitle}>
                <Text style={styles.title}>Meus Arquivos</Text>
            </View>
            <View style={styles.flatlistContent}>
                <FlatList
                    data={searchResults.length > 0 ? searchResults : folders.pastas}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => String(index)}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <TouchableOpacity key={item.id}
                            onPress={() => {
                                navigation.navigate('Folder', { data: item });
                            }}
                            style={[styles.contentFolders, { width: itemWidth }]}
                        >
                            <Icon name={'folder'} size={60} color={'#000000'} />
                            <Text style={{ textAlign: 'center', color: '#000000' }}>{item.nome}</Text>
                        </TouchableOpacity>
                    )}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyMessage}>Nenhum resultado encontrado</Text>
                    )}
                />
            </View>
            <Modal
                animationType='fade'
                transparent={true}
                visible={visible}
            >
                <View style={styles.containerModal}>
                    <View style={styles.modal}>
                        <TouchableOpacity style={styles.contentLogout}
                            onPress={() => { setVisible(false) }}>
                            <Icon name={'cancel'} size={30} color={'#CC0000'} />
                        </TouchableOpacity>
                        <Text style={styles.title}> Criar nova pasta</Text>
                        <TextInput
                            ref={newFolderInput}
                            text={'Digite o nome da pasta'}
                            autoCapitalize='none'
                            placeholderTextColor="#19191B"
                            value={newFolder}
                            maxLength={12}
                            autoCorrect={false}
                            onChangeText={text => setNewFolder(text)}
                            style={styles.input}
                        />
                        <Button title='Confirmar'
                            onPress={() => {
                                handlePostFolder();
                                setVisible(false);
                            }} />
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}
