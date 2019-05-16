import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import gradient from 'gradient-color'
import styles from './progressButtonBarStyles'

class ProgressButtonBar extends React.Component {

  constructor(props) {
    super(props);
    const { type, quantity, startColor, endColor } = this.props
    let object = {}
    let startColorGradient = startColor ? startColor : "#7e93f5"
    let endColorGradient = endColor ? endColor : "#f32b65"
    const colors = gradient([
      startColorGradient,
      endColorGradient,
    ], quantity)

    for (let index = 0; index < quantity; index++) {
      object[type + '-' + index] = {
        disable: styles.disable,
        enable: { backgroundColor: "yellow" },
        class: 'disable'
      }
    }

    this.state = {
      ...object,
      colors
    };
  }

  enableMinor = (position) => {
    const { type } = this.props
    for (let index = 0; index <= position; index++) {
      this.setState({
        [type + '-' + index]: { class: this.state[type + '-' + index].enable }
      })
    }
  }

  disableMayor = (position) => {
    const { type, quantity } = this.props
    for (let index = position; index < quantity; index++) {
      this.setState({
        [type + '-' + index]: { class: 'disable' }
      })
    }
  }

  setValue = (position) => {
    const { type } = this.props
    const status = this.state[type + '-' + position].class
    if (status === 'disable') {
      this.enableMinor(position)
    } else {
      this.disableMayor(position)
    }
  }

  render() {
    const { type, quantity, description } = this.props
    let items = []
    for (let index = 0; index < quantity; index++) {
      items.push(
        <Button
          key={type + '_progress_' + index}
          id={type + '_progress_' + index}
          style={[styles.button, this.state[type + '-' + index].class === 'disable' ? styles.disable : { backgroundColor: this.state.colors[index] }]}
          type="clear"
          onPress={() => this.setValue(index)}
        />
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text>{description}</Text>
        </View>
        <View style={styles.row}>
          <Text> 0 </Text>
          {items}
          <Text> {quantity} </Text>
        </View>
      </View>
    )
  }
}



export default ProgressButtonBar
