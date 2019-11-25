import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/styles';

export const Layout = props => {
  const { containerLayout } = styles;
  return <View style={containerLayout}>{props.children}</View>;
};
