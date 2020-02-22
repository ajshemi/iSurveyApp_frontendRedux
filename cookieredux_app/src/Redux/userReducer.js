const initialState = {
    user: {
      owned_reviews: [],
      comment:{}
    },
    token: ""
  }
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case "SAVE_USER_TO_STATE":
  
        return {...state, user: action.userInfo.user, token: action.userInfo.token}
        // return {...state, ...action.payload}
  
    //   case "SAVE_SNACK_TO_USER":
  
    //     return {
    //       ...state,
    //       user: {
    //         ...state.user,
    //         owned_snacks: [...state.user.owned_snacks, action.payload]
    //       }
    //     }
      // case "UPDATE_REVIEW_TO_STATE":
      //   return {...state, user:action.userInfo }

  
      default:
        return state;
    }
  
  }
  
  export default userReducer