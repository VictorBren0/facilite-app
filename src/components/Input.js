import React, {useState, useImperativeHandle} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Input = React.forwardRef((props, ref) => {
  const [sec, setSec] = useState(props.secureTextEntry);
  const [error, setError] = useState(false);
  const inputRef = React.createRef();

  useImperativeHandle(ref, () => ({
    focusOnError(){
      setError(true)
      inputRef.current.focus()
    },
    resetError(){
      setError(false)
    }
  }))

  return (
    <View style={{flexDirection: 'column'}}>
      <Text style={styles.text}>{props.text}</Text>
      <View style={styles.container}>

    
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        ref={inputRef}
        underlineColorAndroid="transparent"
        placeholderTextColor="#19191B"
        style={[styles.input,{borderColor: error ? '#E91E63' : '#FFFFFF'}]}
        {...props}
        secureTextEntry={sec}
      />
      {props.secureTextEntry && (
        <TouchableOpacity onPress={() => setSec(!sec)}>
          <Icon
            name={sec ? "eye" : "eye-off"}
            size={26}
            color={error ? '#E91E63' : '#FFFFFF'}
            style={styles.iconSecret}
          />
        </TouchableOpacity>
      )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    height: 45,
    color: "#FFFFFF",
    paddingLeft: 10,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    color: '#FFFFFF',
    left: 20,
  },
  icon: {
    position: 'absolute',
    left: 7,
    top: 17,
  },
  iconSecret: {
    position: 'absolute',
    right: 10,
    top: -13,
  },
});

export default Input;