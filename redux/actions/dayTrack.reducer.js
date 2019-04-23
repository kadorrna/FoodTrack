import { createReducer } from 'reduxsauce'
import { Types } from '../actions'
import { constants } from '../../constants'

export const INITIAL_STATE = { 
  [constants.fruits]: 0,
  [constants.snatch]: 0,
  [constants.carbo]: 0,
}

export const increment = (state = INITIAL_STATE, {foodType}) => 
  ({ ...state, [foodType]: state[foodType] + 1 })
  
export const decrement = (state = INITIAL_STATE, {foodType}) => 
  ({ ...state, [foodType]: state[foodType] - 1 })

  export const HANDLERS = {
    [Types.INCREMENT]: increment,
    [Types.DECREMENT]: decrement,
  }

export default createReducer(INITIAL_STATE, HANDLERS)
