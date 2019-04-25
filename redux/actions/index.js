import { createActions } from 'reduxsauce'

export const ACTION_ERROR = 'ERROR'


const { Types, Creators } = createActions({
  increment: ['foodType'],
  decrement: ['foodType'],
  savediet: ['data'],
})


export default Creators
export { Types }