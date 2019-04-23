import { createActions } from 'reduxsauce'

export const ACTION_ERROR = 'ERROR'


const {Types, Creators} = createActions({
  increment:['foodType'],
  decrement:['foodType']
})


export default Creators
export { Types }