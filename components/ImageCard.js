import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

export const ImageCard = ({ photo, onPress }) => {
  const { container, sub, h1, h4, cover } = styles;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={sub}>
          <Image style={cover} source={{ uri: photo.urls.small }} />
        </View>
        <Text style={h4}>author:</Text>
        <Text style={h1}>{photo.user.name}</Text>
      </View>
    </TouchableOpacity>
  );
};
