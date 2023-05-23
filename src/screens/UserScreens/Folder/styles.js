import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
    },
    contentHeader: {
        width: '100%',
        height: 100,
        backgroundColor: '#1D1D2E',
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    contentBack: {
        width: '20%',
        alignItems: 'center',
    },
    titleContent: {
        width: '60%',
        alignItems: 'center',

    },
    titleHeader: {
        fontSize: 21,
        color: '#FFFFFF',
    },
    contentIcon: {
        width: '20%',
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        color: '#000000',
    },

});
export default styles;