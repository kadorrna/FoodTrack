import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AsyncStorage } from '@react-native-community/async-storage'
import { Input } from 'react-native-elements'
import styles from './dietConfigStyles'
import generalStyles from './generalStyles'


class DietConfig extends React.Component {
  static navigationOptions = {
    title: 'Diet Config',
  };

  constructor(props) {
    super(props);
    this.state = {
      fruits: 0,
      carbohydrates: 0,
      snatch: 0,
      showFruitsError: false,
      showCarbohydratesError: false,
      showSnatchError: false,
      isSubmitted: false,
    };
  }

  isValidNumber = value => {
    return !isNaN(value)
  }

  saveDiet = async() => {
    const {fruits, carbohydrates, snatch} = this.state
    this.setState({ submitted: true })
    if (this.isValidNumber(fruits) 
    && this.isValidNumber(carbohydrates) 
    && this.isValidNumber(snatch)) {
      await AsyncStorage.multiSet([
        ['@FoodTruck:CarbohydratesMax',carbohydrates],
        ['@FoodTruck:SnatchMax',snatch], 
        ['@FoodTruck:FruitsMax',fruits], 
      ])
      this.setState({isSubmitted: true})
    } else {
      if(!this.isValidNumber(fruits)){
        this.setState({showFruitsError: true})
      }
      if(!this.isValidNumber(carbohydrates)){
        this.setState({showCarbohydratesError: true})
      }
      if(!this.isValidNumber(snatch)){
        this.setState({showSnatchError: true})
      }
      console.log('No deberia submiterar')

    }

  }


  render() {
    // const {name}= this.props.navigation.state.params
    // const {navigate}= this.props.navigation
    return (
      <View style={generalStyles.container}>
        <View style={styles.row}>
          <Input
            label="Frutas"
            onChangeText={(fruits) => this.setState({ fruits })}
            keyboardType="numeric"
            errorStyle={[this.state.showFruitsError ? {display:'flex'} : {display:'none'},  { color: 'red' }]}
            errorMessage='Only numbers'
          />
        </View>
        <View style={styles.row}>
          <Input
            label="Carbohidratos"
            onChangeText={(carbohydrates) => this.setState({ carbohydrates })}
            keyboardType="numeric"
            errorStyle={[this.state.showCarbohydratesError ? {display:'flex'} : {display:'none'},  { color: 'red' }]}
            errorMessage='Only numbers'
          />
        </View>
        <View style={styles.row}>
          <Input
            label="Almidon"
            style={styles.inputs}
            onChangeText={(snatch) => this.setState({ snatch })}
            keyboardType="numeric"
            errorStyle={[this.state.showSnatchError ? {display:'flex'} : {display:'none'},  { color: 'red' }]}
            errorMessage='Only numbers'
          />
        </View>
        <View>

        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[generalStyles.generalOpacity, styles.button]}
            onPress={() => this.saveDiet()}>
            <Text style={[generalStyles.generalOpacityText, styles.buttonText]}>
              Guardar la dieta
          </Text>
          </TouchableOpacity>
          <Text 
            style= {[this.state.submitted ? {display:'flex'} : {display:'none'},  { color: 'red' }]}>
            Guardado Correctamente
          </Text>
        </View>
      </View>
    );
  }
}

export default DietConfig
