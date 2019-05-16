
import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft:20,
    marginTop: 100,
  },
  row: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  centerRow: {
    flex: 1,
    flexDirection: 'column',
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
  },
  inputs: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    minWidth:40 
  },
  buttonText:{
    color: 'white',
  },
  button: {
    backgroundColor: '#0066ff',
  },
})

export default styles
