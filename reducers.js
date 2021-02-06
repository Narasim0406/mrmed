import { combineReducers } from 'redux'
import * as types from './types'

const initialAuth = {
  userDetails:{},
  userToken:"",
  cartProduct:[],
  products:[]
}

const reducer = (state=initialAuth,{type,payload}) => {
  switch (type) {
    case types.USER_DETAILS:{
      console.log("USER_DETAILS", type, payload)
      return {userDetails:payload};
    }
    case types.USER_TOKEN:{
      console.log("USER_TOKEN", type, payload)
      return {userToken:payload};
    }
    case types.CART_PRODUCTS:{
      console.log("CART_PRODUCTS", type, payload)
      return {cartProduct:payload};
    }
    case types.PRODUCT_LISTS:{
      console.log("PRODUCT_LISTS", type, payload)
      return {products:payload};
    }
    default:
      return state
  }
}

// // COUNTER REDUCER
// const counterReducer = (state = 0, { type }) => {
//   switch (type) {
//     case types.INCREMENT:
//       return state + 1
//     case types.DECREMENT:
//       return state - 1
//     case types.RESET:
//       return 0
//     default:
//       return state
//   }
// }

// // INITIAL TIMER STATE
// const initialTimerState = {
//   lastUpdate: 0,
//   light: false,
// }

// // TIMER REDUCER
// const timerReducer = (state = initialTimerState, { type, payload }) => {
//   switch (type) {
//     case types.TICK:
//       return {
//         lastUpdate: payload.ts,
//         light: !!payload.light,
//       }
//     default:
//       return state
//   }
// }

// COMBINED REDUCERS
const reducers = {
  // counter: counterReducer,
  // timer: timerReducer,
  auth:reducer,

}

export default combineReducers(reducers)
