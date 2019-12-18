import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Landing from '../pages/Landing';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Landing: {
    screen: Landing,
  },
  Home: {
    screen: Home,
  },
});

export default createAppContainer(AppNavigator);
