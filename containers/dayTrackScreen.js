import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import actions from '../redux/actions/'
import generalStyles from '../generalStyles'
import { constants } from '../constants'
import DayTrackRow from '../components/dayTrackRow/dayTrackRow'
import ProgressChart  from '../components/progressChart/progressChart'

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

    const data = [
      (this.props.dietConfig[constants.fruits + 'MAX'] * 100) / this.props.dayTrack[constants.fruits],
      (this.props.dietConfig[constants.carbo + 'MAX'] * 100) / this.props.dayTrack[constants.carbo],
      (this.props.dietConfig[constants.snatch + 'MAX'] * 100) / this.props.dayTrack[constants.snatch]
    ]

    return (
      <View style={generalStyles.container}>
        <View style={{ height: 200, width:200, flexDirection: 'row' }}>
          <ProgressChart />
          </View>
        {/* <DayTrackRow
          description={constants.fruits}
          propValue={this.props.dayTrack[constants.fruits]}
          increment={() => { this.addFood(constants.fruits) }}
          decrement={() => { this.subtractFood(constants.fruits) }}
          disableIncrement={this.props.dietConfig[constants.fruits + 'MAX'] === this.props.dayTrack[constants.fruits]}
          disableDecrement={this.props.dayTrack[constants.fruits] === 0}
        />
        <DayTrackRow
          description={constants.carbo}
          propValue={this.props.dayTrack[constants.carbo]}
          increment={() => { this.addFood(constants.carbo) }}
          decrement={() => { this.subtractFood(constants.carbo) }}
          disableIncrement={this.props.dietConfig[constants.carbo + 'MAX'] === this.props.dayTrack[constants.carbo]}
          disableDecrement={this.props.dayTrack[constants.carbo] === 0}
        />
        <DayTrackRow
          description={constants.snatch}
          propValue={this.props.dayTrack[constants.snatch]}
          increment={() => { this.addFood(constants.snatch) }}
          decrement={() => { this.subtractFood(constants.snatch) }}
          disableIncrement={this.props.dietConfig[constants.snatch + 'MAX'] === this.props.dayTrack[constants.snatch]}
          disableDecrement={this.props.dayTrack[constants.snatch] === 0}
        /> */}
      </View>
    )
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = actions

export default connect(mapStateToProps, mapDispatchToProps)(DayTrackScreen)
