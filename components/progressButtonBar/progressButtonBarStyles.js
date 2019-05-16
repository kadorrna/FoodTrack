import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  row: {
    flexDirection:'row',
  },
  button: {
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 1,
    marginRight: 1,
  },
  disable: {
    borderColor: "red",
  }

})

export default styles