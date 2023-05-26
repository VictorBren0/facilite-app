import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import React from 'react';
import { View, Text } from 'react-native';

const toastConfig = {
    error: (props) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 20,
                paddingTop: 10
            }}
            text2Style={{
                fontSize: 18,
                paddingTop: 5
            }}
            text2NumberOfLines={
                6
            }
            style={{
                height: props.style1,    
                borderLeftColor: 'red' 
            }}
        />
    ),
    tomatoToast: ({ text1, props }) => (
        <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
        </View>
    )
};

export default toastConfig