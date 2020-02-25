  export const saveUserToState = (user) => {
    return {
      type: "SAVE_USER_TO_STATE",
      user
    }
  }
  
  
  export const addProductsToState = (products) => {
    return {
      type: "ADD_PRODUCTS",
      products
    }
  }


  export const addCommentToState = (comment) => {
    return {
      type: "ADD_COMMENT",
      comment
    }
  }

  export const deleteCommentFromState=(comment) => {
    return {
      type:"DELETE_COMMENT",
      comment
    }
    
  }

  export const updateRatingToState = (review) => {
    return {
      type: "UPDATE_USER_RATING",
      review
    }
  }

  // export const addReviewToState = (review) => {
  //   return {
  //     type: "ADD_REVIEW",
  //     review
  //   }
  // }