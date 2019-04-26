import { createReducer } from 'reduxsauce'
import { Types } from '../actions'
import { constants } from '../../constants'

export const INITIAL_STATE = {
  [constants.fruits + 'MAX']: 0,
  [constants.snatch + 'MAX']: 0,
  [constants.carbo + 'MAX']: 0,
}

export const save = (state = INITIAL_STATE, {data}) => ({ ...state, ...data })

export const HANDLERS = {
  [Types.SAVEDIET]: save,
}

export default createReducer(INITIAL_STATE, HANDLERS)
