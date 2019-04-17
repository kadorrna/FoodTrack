import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import generalFoodStyles from './generalFoodStyles'

class FruitsScreen extends React.Component {
  render() {
    return (
      <View style={[generalFoodStyles.container, styles.container]}>
        <Text style={styles.label}>Todo sobre la fruta</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cadetblue',
  },
  label: {
    fontSize: 22,
    textAlign: 'center',
    color: '#656565',
  },
});

export default FruitsScreen