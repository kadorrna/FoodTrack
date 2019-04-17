import React from 'react'
import { Button, View, Text } from 'react-native'
import styles from './homescreenStyles'
import generalStyles from './generalStyles'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={generalStyles.container}>
        <Text style={[generalStyles.generalDescription, styles.description]}>Ordenemos la alimentacion</Text>
        <View style={styles.button}>
          <Button
            title="Siguiente >"
            onPress={() => navigate('Menu', { name: 'Kado' })}
          />
        </View>
      </View>
    );
  }
}


export default HomeScreen
