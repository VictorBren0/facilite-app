import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FileButton = () => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Icon name="note-add" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default FileButton;
