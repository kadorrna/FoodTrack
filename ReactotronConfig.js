import Reactotron from 'reactotron-react-native'
import {reactotronRedux} from 'reactotron-redux'

const reactotron = Reactotron
  .configure({ name: 'React Native Demo' })// controls connection & communication settings
  .use(reactotronRedux()) // add all built-in react native plugins
  .connect() // let's connect!


export default reactotron

