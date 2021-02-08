import { combineReducers } from 'redux'
import * as types from './types'

const initialAuth = {
  userDetails:{},
  userToken:"",
  cartProduct:[],
  products:[]
}
const initialPresc = {
  uploadPrescription: [],
  chooseMedicine: ""
}

const reducer = (state=initialAuth,{type,payload}) => {
  switch (type) {
    case types.USER_DETAILS:{
      console.log("USER_DETAILS", type, payload)
      return {userDetails:payload};
    }
   
    default:
      return state
  }
}

const userToken = (state=initialAuth,{type,payload}) => {
  switch (type) {
   
    case types.USER_TOKEN:{
      console.log("USER_TOKEN", type, payload)
      return {userToken:payload};
    }
   
    default:
      return state
  }
}

const cartProduct = (state=initialAuth,{type,payload}) => {
  switch (type) {
   
   
    case types.CART_PRODUCTS:{
      console.log("CART_PRODUCTS", type, payload)
      return {cartProduct:payload};
    }
    default:
      return state
  }
}

const products = (state=initialAuth,{type,payload}) => {
  switch (type) {
   
   
    case types.PRODUCT_LISTS:{
      console.log("PRODUCT_LISTS", type, payload)
      return {products:payload};
    }
    default:
      return state
  }
}

const upload_prescription = (state=initialPresc,{type,payload}) => {
  switch (type) {
    case types.UPLOAD_PRESCRIPTION:{
      console.log("USER_DETAILS", type, payload)
      return {uploadPrescription:payload};
    }
    default:
      return state
  }
}

const choose_medicine = (state=initialPresc,{type,payload}) => {
  switch (type) {
   
    case types.CHOOSE_MEDICINE:{
      console.log("USER_TOKEN", type, payload)
      return {chooseMedicine:payload};
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
  userDetail:reducer,
  userToken:userToken,
  cartDetail:cartProduct,
  productList:products,
  prescription:upload_prescription,
  chooseMedicines:choose_medicine
}

export default combineReducers(reducers)
