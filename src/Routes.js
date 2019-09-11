import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '@pages/Home/Home';
import Repost from '@pages/Repost/Repost';
import Login from '@pages/Login/Login';

const Routes = createStackNavigator({
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
});

const App = createAppContainer(Routes);

export default App;
