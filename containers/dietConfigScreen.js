import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import actions from '../redux/actions/'
import styles from './dietConfigScreenStyles'
import generalStyles from '../generalStyles'
import { constants } from '../constants'
import ProgressButtonBar from '../components/progressButtonBar/progressButtonBar';


class DietConfigScreen extends React.Component {
  static navigationOptions = {
    title: 'Diet Config',
  }

  constructor(props) {
    super(props)
    this.state = {
      fruits: this.props[constants.fruits + 'MAX'],
      snatch: this.props[constants.snatch + 'MAX'],
      carbo: this.props[constants.carbo + 'MAX'],
      isSubmitted: false,
    }
  }

  saveDiet = () => {
    const { fruits, carbo, snatch } = this.state

    this.setState({
      isSubmitted: true,
    })
    this.props.savediet({ [constants.fruits + 'MAX']: fruits, [constants.carbo + 'MAX']: carbo, [constants.snatch + 'MAX']: snatch })
  }

  render() {
    return (
      <View style={[generalStyles.container, styles.container]}>
        <ProgressButtonBar
          description='Frutas'
          quantity={6}
          type={constants.fruits}
          actualValue={this.state.fruits}
          update={val => this.setState({ fruits: val })}
        />
        <ProgressButtonBar
          description='Carbohidratos'
          quantity={10}
          type={constants.carbo}
          actualValue={this.state.carbo}
          update={val => this.setState({ carbo: val })}
        />

        <ProgressButtonBar
          description='Almidon'
          quantity={10}
          type={constants.snatch}
          actualValue={this.state.snatch}
          update={val => this.setState({ snatch: val })}
        />

        <View>

        </View>
        <View style={[generalStyles.row, styles.centerRow]}>
          <TouchableOpacity style={[generalStyles.generalOpacity, styles.button]}
            onPress={() => this.saveDiet()}>
            <Text style={[generalStyles.generalOpacityText, styles.buttonText]}>
              Guardar la dieta
          </Text>
          </TouchableOpacity>
          <Text
            style={[this.state.isSubmitted ? { display: 'flex' } : { display: 'none' }, { color: 'red' }]}>
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
