import React from 'react'
import { View, Text } from 'react-native'
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import FruitsScreen from '../foodDescriptionViews/fruitsScreen'

class FoodDescScreen extends React.Component {
  static navigationOptions = {
    title: 'Food Description',
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <IndicatorViewPager
          style={{flex: 1}}
          indicator={this._renderDotIndicator()}
        >
          <View>
            <FruitsScreen />
          </View>
          <View style={{ backgroundColor: 'cornflowerblue' }}>
            <Text>page two</Text>
          </View>
          <View style={{ backgroundColor: '#1AA094' }}>
            <Text>page three</Text>
          </View>
        </IndicatorViewPager>
      </View>
    )
  }

  _renderDotIndicator() {
    return <PagerDotIndicator style={{ position: 'absolute', bottom: 50 }} pageCount={3} />;
  }

}

export default FoodDescScreen