import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { TEST_HOME, TEST_DETAILS } from '../routing/routs.js';

export default createStackNavigator(
  {
    [TEST_HOME]: HomeScreen,
    [TEST_DETAILS]: DetailsScreen,
  },
  {
    initialRouteName: TEST_HOME,
    headerMode: 'none',
  },
);
