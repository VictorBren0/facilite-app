import React, { useState } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <Icon name="ios-search" size={24} color="#000000" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Pesquisar..."
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderWidth: 2,
  },
  icon: {
    marginRight: 8,
    marginLeft: 8,
  },
  input: {
    width: '80%',
    fontSize: 16,
    color: '#000000',
  },
});

export default SearchBar;
