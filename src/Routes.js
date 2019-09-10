import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '@pages/Home/Home';

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
});

const App = createAppContainer(Routes);

export default App;
