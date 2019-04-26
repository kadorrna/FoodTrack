import { combineReducers } from 'redux'
import dayTrack from '../actions/dayTrack.reducer'
import dietConfig from '../actions/dietConfig.reducer'

export default combineReducers({
  dayTrack,
  dietConfig
})
