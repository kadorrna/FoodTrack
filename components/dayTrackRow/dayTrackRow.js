import React from 'react'
import { View } from 'react-native'
import { Button, Text, Tooltip } from 'react-native-elements'
import styles from './dayTrackRowStyles'
import generalStyles from '../../generalStyles'

class DayTrackRow extends React.Component {  
  render() {
    const {description, propValue, increment, decrement, disableIncrement, disableDecrement}= this.props
    return (
      <View style={[generalStyles.row, styles.row]}>
        <Button
          title="-"
          type="outline"
          onPress={decrement}
          disabled={disableDecrement}
        />
        <View style={styles.textWrapper}>
          <Tooltip popover={<Text>{description}</Text>}>
            <Text style={styles.quantityText} >
              {propValue}
            </Text>
          </Tooltip>
        </View>
        <Button
          title="+"
          type="outline"
          onPress={increment}
          disabled={disableIncrement}
        />
      </View>
    )
  }
}

export default DayTrackRow
