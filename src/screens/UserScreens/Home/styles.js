import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#EEEEEE',
      alignItems: 'center',
    },
    contentHeader: {
        width: '100%',
        height: 200,
        backgroundColor: '#1D1D2E',
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
        justifyContent: 'center',
    },
    contentLogout:{
        flexDirection: 'row-reverse',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        right: 10,
        width: 70,
        height: 30,
    },
    textLogout:{
        fontSize: 18,
        color: '#CC0000'
    },
    contentIcon:{
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    contentTitle:{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: '#000000',
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
    input: {
        width: '90%',
        height: 45,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000000',
        paddingLeft: 10,
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',

    },
    flatlistContent: {
        width: '100%', 
        height: '100%', 
        flexDirection: 'row',
    },
    contentFolders: {
        width: 70,
        alignItems: 'center',
        marginTop: 10
    },
    emptyMessage: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 20,
        color: '#888888',
      },
  });
  export default styles;