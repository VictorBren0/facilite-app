import React, { useCallback, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone correspondente



const MAX_TITLE_LENGTH = 22;
const CARD_WIDTH = 100;
const CARD_HEIGHT = 100;

const getFileIcon = (text) => {
  if (text.endsWith('.pdf')) {
    return 'file-pdf-o';
  } else if (text.endsWith('.doc') || text.endsWith('.docx')) {
    return 'file-word-o';
  } else if (text.endsWith('.xls') || text.endsWith('.xlsx')) {
    return 'file-excel-o';
  } else if (text.endsWith('.ppt') || text.endsWith('.pptx')) {
    return 'file-powerpoint-o';
  } else if (text.endsWith('.jpg') || text.endsWith('.jpeg') || text.endsWith('.png')) {
    return 'file-image-o';
  } else if (text.endsWith('.mp3') || text.endsWith('.wav')) {
    return 'file-audio-o';
  } else if (text.endsWith('.mp4') || text.endsWith('.avi') || text.endsWith('.mkv')) {
    return 'file-video-o';
  } else {
    return 'file-o';
  }
};

const FilesCard = ({ text, posterPath, onPress }) => {


  const truncatedTitle = useMemo(() => {
    if (text?.length > MAX_TITLE_LENGTH) {
      return `${text.substring(0, MAX_TITLE_LENGTH)}...`;
    }
    return text;
  }, [text]);

  const fileIcon = useMemo(() => {
    if (posterPath) {
      return getFileIcon(posterPath);
    }
    return 'file-o'; // Ícone padrão para outros tipos de arquivo quando o texto é indefinido
  }, [posterPath]);

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.image}>
            <Icon name={fileIcon} size={50} color="#111111" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {truncatedTitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    flexDirection: 'column',
  },
  cardContainer: {
    paddingTop: 10
  },
  image: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    backgroundColor: '#EFEFF0',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    color: '#111111',
    fontSize: 13,
  },
  titleContainer: {
    width: CARD_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default FilesCard;