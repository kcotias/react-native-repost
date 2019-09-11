import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '@pages/Home/Home';
import Repost from '@pages/Repost/Repost';

const Routes = createStackNavigator({
  LOGIN: {
    screen: Home,
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
