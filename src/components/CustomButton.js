import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ text, backgroundColor, textColor, onPress, style, borderColor }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: backgroundColor, borderColor: borderColor },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.bottonText, { color: textColor }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    width: 250,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  bottonText: {
    fontFamily: 'WorkSans-Bold',
    fontSize: 22,
  },
};

export default CustomButton;
