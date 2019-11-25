import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView } from 'react-native';

import { photos, get_photos_thunk } from '../store';
import { styles } from '../styles/styles';

import { Header, Layout, ImageCard } from '../components';
import { TEST_DETAILS } from '../routing/routs';

const HomeScreen = props => {
  const { photos } = props;
  const { navigation } = props;
  useEffect(() => {
    props.get_photos_thunk();
  }, []);
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <Layout style={styles.containerLayout}>
          {photos.map(photo => (
            <ImageCard
              photo={photo}
              key={photo.id}
              onPress={() => navigation.navigate(TEST_DETAILS, photo)}
            />
          ))}
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

const getData = state => ({
  photos: photos(state),
});

const getMethods = {
  get_photos_thunk,
};

export default connect(getData, getMethods)(HomeScreen);
