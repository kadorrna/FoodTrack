import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import actions from '../redux/actions/'
import generalStyles from '../generalStyles'
import { constants } from '../constants'
import DayTrackRow from '../components/dayTrackRow/dayTrackRow'

class DayTrackScreen extends React.Component {
  static navigationOptions = {
    title: 'Day Track',
  }

  constructor(props) {
    super(props)
    this.state = {
      errorLoading: false,
    }
  }

  addFood = (foodType) => {
    this.props.increment(foodType)
  }

  subtractFood = (foodType) => {
    this.props.decrement(foodType)
  }

  render() {
    return (
      <View style={generalStyles.container}>
        <DayTrackRow
          description={constants.fruits}
          propValue={this.props.dayTrack[constants.fruits]}
          increment={() => { this.addFood(constants.fruits) }}
          decrement={() => {this.subtractFood(constants.fruits) }}
          disableIncrement = {this.props.dietConfig[constants.fruits + 'MAX'] === this.props.dayTrack[constants.fruits]}
          disableDecrement = {this.props.dayTrack[constants.fruits] === 0}
        />
        <DayTrackRow
          description={constants.carbo}
          propValue={this.props.dayTrack[constants.carbo]}
          increment={() => { this.addFood(constants.carbo) }}
          decrement={() => {this.subtractFood(constants.carbo) }}
          disableIncrement = {this.props.dietConfig[constants.carbo + 'MAX'] === this.props.dayTrack[constants.carbo]}
          disableDecrement = {this.props.dayTrack[constants.carbo] === 0}
        />
        <DayTrackRow
          description={constants.snatch}
          propValue={this.props.dayTrack[constants.snatch]}
          increment={() => { this.addFood(constants.snatch) }}
          decrement={() => {this.subtractFood(constants.snatch) }}
          disableIncrement = {this.props.dietConfig[constants.snatch + 'MAX'] === this.props.dayTrack[constants.snatch]}
          disableDecrement = {this.props.dayTrack[constants.snatch] === 0}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = actions

export default connect(mapStateToProps, mapDispatchToProps)(DayTrackScreen)
