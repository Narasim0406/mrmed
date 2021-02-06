import * as types from './types'

// // INITIALIZES CLOCK ON SERVER
// export const serverRenderClock = () => (dispatch) =>
//   dispatch({
//     type: types.TICK,
//     payload: { light: false, ts: Date.now() },
//   })

// // INITIALIZES CLOCK ON CLIENT
// export const startClock = () => (dispatch) =>
//   setInterval(() => {
//     dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } })
//   }, 1000)

// // INCREMENT COUNTER BY 1
// export const incrementCount = () => ({ type: types.INCREMENT })

// // DECREMENT COUNTER BY 1
// export const decrementCount = () => ({ type: types.DECREMENT })

// // RESET COUNTER
// export const resetCount = () => ({ type: types.RESET })

export const userDetails = (details) => {
  return {
      type: types.USER_DETAILS,
      payload: details
  }
}
export const userToken = (token) => {
  
  return {
      type: types.USER_TOKEN,
      payload: token
  }
}
export const cartProduct = (products) => {
  return {
      type: types.CART_PRODUCTS,
      payload: products
  }
}
export const productList = (products) => {
  return {
      type: types.PRODUCT_LISTS,
      payload: products
  }
}