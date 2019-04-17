import React from 'react'
import { View, Text } from 'react-native'
import generalStyles from './generalStyles'

class DayTrackScreen extends React.Component {
  static navigationOptions = {
    title: 'Day Track',
  };

  constructor(props) {
    super(props);
    this.state = {
      fruits: 0,
      carbohydrates: 0,
      snatch: 0,
      errorLoading:false,
    };
  }
  
  retriveMax = async () => {
    try {
      const fruits =  await AsyncStorage.getItem('FoodTruck:FruitsMax')
      const carbohydrates = await AsyncStorage.getItem('FoodTruck:CarbohydratesMax')
      const snatch = await AsyncStorage.getItem('FoodTruck:SnatchMax')
      this.setState({
        fruits, carbohydrates, snatch
      })
    } catch(error){
      this.setState({errorLoading: true})
    }
  }

  render() {
    this.retriveMax()
    const { navigate } = this.props.navigation;
    return (
      <View style={generalStyles.container}>
        <Text>
          {this.state.fruits}
        </Text>
        <Text 
          style= {[this.state.errorLoading ? {display:'flex'} : {display:'none'},  { color: 'red' }]}>
          Error loading
        </Text>
      </View>
    );
  }
}


export default DayTrackScreen
