import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    TouchableOpacity
} from 'react-native';

import styles from './styles';
import CircleProgress from '../../../components/CircleProgress';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchBar from '../../../components/SearchBar';


export default function Home({ navigation }) {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (text) => {
        console.log('Buscar por:', text);
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentHeader}>
                <CircleProgress percentage={500} />
            </View>
            <View style={styles.contentIcon}>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Folder');
                }}>
                    <Icon name={'create-new-folder'} size={40} color={'#000000'} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name={'note-add'} size={40} color={'#000000'} />
                </TouchableOpacity>
            </View>
            <SearchBar onSearch={handleSearch} />
            <View style={styles.contentTitle}>
                <Text style={styles.title}>Meus Arquivos</Text>
            </View>

        </SafeAreaView>
    );
}
