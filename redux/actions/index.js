import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  increment: ['foodType'],
  decrement: ['foodType'],
  savediet: ['data'],
})

export const ACTION_ERROR = 'ERROR'
export default Creators
export { Types }