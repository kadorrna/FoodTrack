import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './menuscreenStyles'
import generalStyles from '../generalStyles'

class MenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Menu',
  };
  render() {
    const {name}= this.props.navigation.state.params
    const {navigate}= this.props.navigation

    
    return (
      <View style={generalStyles.container}>
        <TouchableOpacity style={[generalStyles.generalOpacity, , styles.opacity]}
          onPress={() => navigate('FoodDesc')}>
          <Text style={[generalStyles.generalOpacityText, styles.opacityText]}>
            Detalles grupos alimenticios
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[generalStyles.generalOpacity, styles.opacity]}
          onPress={() => navigate('DietConfig')}>
          <Text style={[generalStyles.generalOpacityText, styles.opacityText]}>
            Configura tu dieta {name}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[generalStyles.generalOpacity, styles.opacity]}
          onPress={() => navigate('DayTrackScreen')}>
          <Text style={[generalStyles.generalOpacityText, styles.opacityText]}>
            Carga tu dia
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MenuScreen