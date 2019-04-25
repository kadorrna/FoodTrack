/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import {initStore} from './redux/store';
import {Provider} from 'react-redux';
import HomeScreen from './containers/homescreen'
import MenuScreen from './containers/menuscreen'
import FoodDescScreen from './containers/foodDescScreen'
import DietConfigScreen from './containers/dietConfigScreen'
import DayTrackScreen from './containers/dayTrackScreen'


if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const store = initStore();

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Menu: { screen: MenuScreen },
  FoodDesc: { screen: FoodDescScreen },
  DietConfig: { screen: DietConfigScreen },
  DayTrackScreen: { screen: DayTrackScreen},
})

export const Appcontainer = createAppContainer(MainNavigator)

export default () => {
  return(
  <Provider store={store}>
    <Appcontainer />
  </Provider> 
  )
}
