import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

let reactotron = {}

const SETTINGS = {
  useReactotron: __DEV__,
}


if (SETTINGS.useReactotron) {
  reactotron = Reactotron
    .configure()// controls connection & communication settings
    .useReactNative()
    .use(reactotronRedux()) // add all built-in react native plugins
    .connect() // let's connect!
  console.tron = Reactotron
} else {
  // a mock version should you decide to leave console.tron in your codebase

  console.tron = {
    log: () => false,
    warn: () => false,
    error: () => false,
    display: () => false,
    image: () => false
  }
}

export { SETTINGS }

export default reactotron

