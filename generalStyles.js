import { StyleSheet } from 'react-native'

const generalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  generalOpacityText: {
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  generalOpacity: {
    alignSelf: 'center',
    borderRadius: 20,
    height: 50,
    marginTop: 40,
    padding: 5,
  },
  generalDescription: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    height: 40,
  },
})

export default generalStyles
