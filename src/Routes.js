import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '@pages/Home/Home';
import Repost from '@pages/Repost/Repost';
import Login from '@pages/Login/Login';
import firebase from 'react-native-firebase';

function getInitialScreen() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      return 'Home';
    }
    return 'Login';
  });
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
