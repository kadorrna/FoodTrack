import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import actions from '../redux/actions/'
import styles from './dietConfigScreenStyles'
import generalStyles from '../generalStyles'
import { constants } from '../constants'


class DietConfigScreen extends React.Component {
  static navigationOptions = {
    title: 'Diet Config',
  }

  constructor(props) {
    super(props)
    this.state = {
      [constants.fruits]: this.props[constants.fruits+'MAX'],
      [constants.snatch]: this.props[constants.snatch+'MAX'],
      [constants.carbo]: this.props[constants.carbo+'MAX'],
      fruitsError: undefined,
      carboError: undefined,
      snatchError: undefined,
      isSubmitted: false,
    }
  }

  isValidNumber = value => {
    return !isNaN(value)
  }

  saveDiet = () => {
    const {fruits, carbo, snatch} = this.state
    let hasError = false

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
      this.setState({
        isSubmitted: true,
        snatchError: undefined,
        carboError: undefined,
        fruitsError: undefined
      })
      this.props.savediet({[constants.fruits+'MAX']:fruits, [constants.carbo+'MAX']:carbo, [constants.snatch+'MAX']:snatch})
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
          >
            {this.state[constants.fruits]}
          </Input>
        </View>
        <View style={[generalStyles.row, styles.row]}>
          <Input
            label="Carbohidratos"
            onChangeText={(carbo) => this.setState({ carbo })}
            keyboardType="numeric"
            errorStyle={{color: 'red' }}
            errorMessage={this.state.carboError ? this.state.carboError : undefined }
          >
            {this.state[constants.carbo]}
          </Input>
        </View>
        <View style={[generalStyles.row, styles.row]}>
          <Input
            label="Almidon"
            style={styles.inputs}
            onChangeText={(snatch) => this.setState({ snatch })}
            keyboardType="numeric"
            errorStyle={{color: 'red'}}
            errorMessage={this.state.snatchError ? this.state.snatchError : undefined  }
          >
          {this.state[constants.snatch]}
          </Input>
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
    )
  }
}

const mapStateToProps = (state) => state.dietConfig
const mapDispatchToProps = actions

export default connect(mapStateToProps, mapDispatchToProps)(DietConfigScreen)
