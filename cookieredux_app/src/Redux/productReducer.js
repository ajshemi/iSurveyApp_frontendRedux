const initialState = {
    products: []
  }
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case "INITIALIZE_PRODUCTS":
        // console.log({...state})
        return {...state, products: action.products}
  
      default:
        return state;
  
    }
  }
  
  
  export default productReducer