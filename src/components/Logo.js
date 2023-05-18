import React from 'react';
import { View, Text } from 'react-native';
import { reduceEachLeadingCommentRange } from 'typescript';

const Logo = ({ fontSize }) => {
  return (
    <View>
        <Text style={[styles.text, {fontSize: fontSize}]}>Faci<Text style={{color: '#FFFFFF'}}>lite</Text></Text>
    </View>
  );
};

const styles = {
  text: {
    color: '#5079F2',
  }
};

export default Logo;
