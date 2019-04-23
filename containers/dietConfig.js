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
      carbo: 0,
      snatch: 0,
      fruitsError: undefined,
      carboError: undefined,
      snatchError: undefined,
      isSubmitted: false,
    };
  }

  isValidNumber = value => {
    return !isNaN(value)
  }

  saveDiet = async() => {
    const {fruits, carbo, snatch} = this.state
    let hasError = false;

    if (!this.isValidNumber(fruits)) {
      this.setState({fruitsError: 'Only Numbers'})
      hasError = true
    }
    
    if (!this.isValidNumber(carbo)){
      this.setState({carboError: 'Only Numbers'})
      hasError = true
    }

    if (!this.isValidNumber(snatch)) {
      this.setState({snatchError: 'Only Numbers'})
      hasError = true
    }

    if (!hasError){
      await AsyncStorage.multiSet([
        ['@FoodTruck:carboMax',carbo],
        ['@FoodTruck:SnatchMax',snatch], 
        ['@FoodTruck:FruitsMax',fruits], 
      ])
      this.setState({
        isSubmitted: true,
        snatchError: undefined,
        carboError: undefined,
        fruitsError: undefined
      })
    } else {
      this.setState({isSubmitted: false})
    }
  }

  render() {
    return (
      <View style={generalStyles.container}>
        <View style={[generalStyles.row, styles.row]}>
          <Input
            label="Frutas"
            onChangeText={(fruits) => this.setState({ fruits })}
            keyboardType="numeric"
            errorStyle={{color: 'red' }}
            errorMessage={this.state.fruitsError ? this.state.fruitsError : undefined}
          />
        </View>
        <View style={[generalStyles.row, styles.row]}>
          <Input
            label="Carbohidratos"
            onChangeText={(carbo) => this.setState({ carbo })}
            keyboardType="numeric"
            errorStyle={{color: 'red' }}
            errorMessage={this.state.carboError ? this.state.carboError : undefined }
          />
        </View>
        <View style={[generalStyles.row, styles.row]}>
          <Input
            label="Almidon"
            style={styles.inputs}
            onChangeText={(snatch) => this.setState({ snatch })}
            keyboardType="numeric"
            errorStyle={{color: 'red'}}
            errorMessage={this.state.snatchError ? this.state.snatchError : undefined  }
          />
        </View>
        <View>

        </View>
        <View style={[generalStyles.row, styles.row]}>
          <TouchableOpacity style={[generalStyles.generalOpacity, styles.button]}
            onPress={() => this.saveDiet()}>
            <Text style={[generalStyles.generalOpacityText, styles.buttonText]}>
              Guardar la dieta
          </Text>
          </TouchableOpacity>
          <Text 
            style= {[this.state.isSubmitted ? {display:'flex'} : {display:'none'},  { color: 'red' }]}>
            Guardado Correctamente
          </Text>
        </View>
      </View>
    );
  }
}

export default DietConfig
