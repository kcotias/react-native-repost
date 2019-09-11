import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '@pages/Home/Home';
import Repost from '@pages/Repost/Repost';
import Login from '@pages/Login/Login';
import AsyncStorage from '@react-native-community/async-storage';

function getInitialScreen() {
  AsyncStorage.getItem('@user')
    .then(value => {
      return value ? 'HOME' : 'LOGIN';
    })
    .catch(err => {});
}

const Routes = createStackNavigator(
  {
    LOGIN: {
      screen: Login,
      navigationOptions: () => ({
        header: null,
      }),
    },
    HOME: {
      screen: Home,
      navigationOptions: () => ({
        header: null,
      }),
    },
    REPOST: {
      screen: Repost,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
  {
    initialRouteName: getInitialScreen(),
  },
);

const App = createAppContainer(Routes);

export default App;
