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
    containerButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
    },
    button: {
        backgroundColor: '#1D1D2E',
        borderRadius: 32,
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
    },
    confirmButton: {
        backgroundColor: 'green',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 6,
        alignItems: 'center',
        marginBottom: 5
    },
    containerModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: '#ffffff',
        width: 300,
        height: 200,
        borderRadius: 20,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },

});
export default styles;