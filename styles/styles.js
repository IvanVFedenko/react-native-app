import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');
const h = Math.floor(win.height);
const w = Math.floor(win.width);

export const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b67d1',
    height: 90,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    paddingRight: 10,
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
  },

  containerLayout: {
    marginTop: 10,
    marginRight: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 50,
  },

  container: {
    width: w / 2.4,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  sub: {
    borderRadius: 10,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  h1: {
    paddingTop: 0,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
  },
  h4: {
    paddingTop: 10,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 10,
    alignSelf: 'center',
    textAlign: 'center',
    paddingBottom: -10,
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10,
  },
  full: {
    width: w,
    height: h - 110,
  },

  leftButtonStyle: {
    fontSize: 65,
    paddingLeft: 10,
    marginLeft: 10,
  },
});
