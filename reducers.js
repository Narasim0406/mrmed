import { combineReducers } from 'redux'
import * as types from './types'

const initialAuth = {
  userDetails:{},
  userToken:"",
  cartProducts:[]
}

const reducer = (state=initialAuth,{type,payload}) => {
  console.log(state.userDetails=payload,"hjk");
  switch (type) {
    case types.USER_DETAILS:{
      return {userDetails:payload};
    }
    case types.USER_TOKEN:{
      return {userToken:payload};
    }
    case types.CART_PRODUCTS:{
      return {cartProducts:payload};
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
  auth:reducer
}

export default combineReducers(reducers)
