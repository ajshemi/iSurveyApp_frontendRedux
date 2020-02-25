const initialState = {user: {user_ratings:[],comment:{}},token:''}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case "SAVE_USER_TO_STATE":
  
        return {...state, user: action.user.user, token: action.user.token}


      case "ADD_COMMENT":

        return {...state, user:{...state.user, comment:{...state.user.comment, user_id: action.comment.user_id, user_comment:action.comment.user_comment}}}
        // return {...state, ...action.payload}
  
      case "UPDATE_USER_RATING":
        let newArray=[...state.user.user_ratings]
        let updatedArray=newArray.map(product=>{
          if(product.id===action.review.product_id){
            return {...product,rating: action.review.rating}
          }
          else{
            return product
          }
        })
  
        return {
          ...state,
          user: {
            ...state.user,
            user_ratings: updatedArray
          }
        }

      case "DELETE_COMMENT":
        return {...state, user:{...state.user, comment:action.comment}}
  
      default:
        return state;
    }
  
  }
  
  export default userReducer