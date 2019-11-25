import React from 'react';
import { View, Image } from 'react-native';
import { styles } from '../styles/styles';
import { Header } from '../components';

const DetailsScreen = props => {
  const { navigation } = props;
  return (
    <View>
      <View>
        <Image
          style={styles.full}
          source={{
            uri: navigation.state.params.urls.full,
          }}
        />
      </View>
      <Header
        detail
        onPress={() => navigation.goBack()}
        leftIcon="md-arrow-back"
        leftColor="#fff"
      />
    </View>
  );
};

export default DetailsScreen;
