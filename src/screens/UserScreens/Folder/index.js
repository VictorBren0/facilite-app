import React, { useState, createRef } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    TouchableOpacity
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FileButton from '../../../components/FileButton';
import { useRoute } from '@react-navigation/native';


export default function Folder({ navigation }) {
    
    const route = useRoute();

    const data = route.params?.data;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentHeader}> 
            <View style={styles.contentBack}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Icon name={'arrow-back'} size={30} color={'#FFFFFF'} />
                </TouchableOpacity>
            </View>
            <View style={styles.titleContent}>
            <Text style={styles.titleHeader}>{data.nome}</Text>
            </View>

                <View style={styles.contentIcon}>
                <TouchableOpacity style={{marginBottom: 15}}>
                <Icon name={'edit'} size={30} color={'#FFFFFF'}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Icon name={'delete'} size={30} color={'#FFFFFF'}/>
                </TouchableOpacity>
            </View>
            
            </View>

            <FileButton />
        </SafeAreaView>
    );
}
