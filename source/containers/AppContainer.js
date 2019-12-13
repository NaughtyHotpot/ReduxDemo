import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../pages/Login';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Login,
  },
});

export default createAppContainer(AppNavigator);
