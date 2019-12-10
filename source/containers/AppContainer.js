import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeView from '../pages/home_view/HomeView';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeView,
  },
});

export default createAppContainer(AppNavigator);
