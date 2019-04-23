import React from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Button, Text, Tooltip } from 'react-native-elements'
import actions from '../redux/actions/'
import generalStyles from './generalStyles'
import styles from './dayTrackScreenStyles'
import { constants } from '../constants'


class DayTrackScreen extends React.Component {
  static navigationOptions = {
    title: 'Day Track',
  };

  constructor(props) {
    super(props);
    this.state = {
      errorLoading: false,
    };
  }

  addFood = (foodType) => {
    this.props.increment(foodType)
  }

  subtractFood = (foodType) => {
    this.props.decrement(foodType)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={generalStyles.container}>
        <View style={[generalStyles.row, styles.row ]}>
          <Button
            title="-"
            type="outline"
            onPress={(e) => this.subtractFood(constants.fruits)}
          />
          <View style={styles.textWrapper}>
            <Tooltip popover={<Text>Fruits</Text>}>
              <Text style={styles.quantityText} >
                {this.props.fruits}
              </Text>
            </Tooltip>
          </View>
          <Button
            title="+"
            type="outline"
            onPress={(e) => this.addFood(constants.fruits)}
          />
        </View>
        <View style={[generalStyles.row, styles.row ]}>
          <Button
            title="-"
            type="outline"
            onPress={(e) => this.subtractFood(constants.carbo)}
          />
          <View style={styles.textWrapper}>
            <Tooltip popover={<Text>Carbohydrates</Text>}>
              <Text style={styles.quantityText} >
                {this.props.carbo}
              </Text>
            </Tooltip>
          </View>
          <Button
            title="+"
            type="outline"
            onPress={(e) => this.addFood(constants.carbo)}
          />
        </View>
        <View style={[generalStyles.row, styles.row ]}>
          <Button
            title="-"
            type="outline"
            onPress={(e) => this.subtractFood(constants.snatch)}
          />
          <View style={styles.textWrapper}>
            <Tooltip popover={<Text>Snatch</Text>}>
              <Text style={styles.quantityText} >
                {this.props.snatch}
              </Text>
            </Tooltip>
          </View>
          <Button
            title="+"
            type="outline"
            onPress={(e) => this.addFood(constants.snatch)}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => state.dayTrack
const mapDispatchToProps = actions

export default connect(mapStateToProps, mapDispatchToProps)(DayTrackScreen)
