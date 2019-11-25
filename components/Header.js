import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Header = ({ detail, onPress, leftIcon, leftColor }) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      {leftIcon && (
        <TouchableOpacity onPress={onPress}>
          <Ionicons
            name={leftIcon}
            style={styles.leftButtonStyle}
            color={leftColor}
          />
        </TouchableOpacity>
      )}
      {!leftIcon ? (
        <Text numberOfLines={1} ellipsizeMode="tail" style={textStyle}>
          Test task for Devsteam.mobi
        </Text>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};
