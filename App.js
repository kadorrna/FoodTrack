/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation'
import {initStore} from './redux/store';
import {Provider} from 'react-redux';
import HomeScreen from './containers/homescreen'
import MenuScreen from './containers/menuscreen'
import FoodDescScreen from './containers/foodDescScreen'
import DietConfig from './containers/dietConfig'
import DayTrackScreen from './containers/dayTrackScreen'

const store = initStore();

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Menu: { screen: MenuScreen },
  FoodDesc: { screen: FoodDescScreen },
  DietConfig: { screen: DietConfig },
  DayTrackScreen: { screen: DayTrackScreen},
})

export const Appcontainer = createAppContainer(MainNavigator)

export function setupReduxContainer(component) {
  const Container = component;

  return connect(
    state => ({ ...state })
  )(props => <Container {...props} />);
}

export default () => (
  <Provider store={store}>
    <Appcontainer />
  </Provider>
)
