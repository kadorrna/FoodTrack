import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import actions from '../redux/actions/'
import generalStyles from '../generalStyles'
import { constants } from '../constants'
import DayTrackRow from '../components/dayTrackRow/dayTrackRow'
import DayProgress  from '../components/dayProgress/dayProgress'

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

  getTypeProgress = (foodType) => {
    if ((this.props.dietConfig[foodType + 'MAX'] && this.props.dietConfig[foodType + 'MAX'] !== 0) &&
      (this.props.dayTrack[foodType] && this.props.dayTrack[foodType] !== 0)) {
      return this.props.dayTrack[foodType] / this.props.dietConfig[foodType + 'MAX']
    } else {
      return 0
    }
  }

  render() {
    const data = [
      this.getTypeProgress(constants.fruits),
      this.getTypeProgress(constants.carbo),
      this.getTypeProgress(constants.snatch)
    ]
    return (
      <View style={generalStyles.container}>
        <View style={{ flexDirection: 'row' }}>
          <DayProgress
            data={data}
          />
        </View>
        <DayTrackRow
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
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = actions

export default connect(mapStateToProps, mapDispatchToProps)(DayTrackScreen)
