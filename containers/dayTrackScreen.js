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
          propValue={this.props[constants.fruits]}
          increment={() => { this.addFood(constants.fruits) }}
          decrement={() => {this.subtractFood(constants.fruits) }}
        />
        <DayTrackRow
          description={constants.carbo}
          propValue={this.props[constants.carbo]}
          increment={() => { this.addFood(constants.carbo) }}
          decrement={() => {this.subtractFood(constants.carbo) }}
        />
        <DayTrackRow
          description={constants.snatch}
          propValue={this.props[constants.snatch]}
          increment={() => { this.addFood(constants.snatch) }}
          decrement={() => {this.subtractFood(constants.snatch) }}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => state.dayTrack
const mapDispatchToProps = actions

export default connect(mapStateToProps, mapDispatchToProps)(DayTrackScreen)
