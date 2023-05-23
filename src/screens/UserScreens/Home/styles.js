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
    contentIcon:{
        width: '100%',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
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

  });
  export default styles;