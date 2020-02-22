// export const fetchAndInitializeProducts = () => {

//     return (dispatch, getState) => {
//       fetch("http://localhost:3000/products")
//       .then(r => r.json())
//       .then((productsArr) => {
//         console.log(productsArr)
//         dispatch(initializeProducts(productsArr))
//       })
  
//     }
  
//   }
  
  // THUNKY STUFF
  
  export const saveUserToState = (userInfo) => {
    return {
      type: "SAVE_USER_TO_STATE",
      userInfo
    }
  }
  
//   export const saveSnackToUserSnacks = (snack) => {
//     return {
//       type: "SAVE_SNACK_TO_USER",
//       payload: snack
//     }
//   }
  
  export const updateRatingToState = (userInfo) => {
    return {
      type: "UPDATE_REVIEW_TO_STATE",
      userInfo
    }
  }
  
  
  export const initializeProducts = (products) => {
    return {
      type: "INITIALIZE_PRODUCTS",
      products
    }
  }