const initialState =[]
  
  
const reviewReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case "UPDATE_REVIEW_TO_STATE":
        let copystate=[...state];
        let idx =copystate.findIndex(element=>element.review_id === action.userInfo.review_id);
        
        return {
          ...state, owned_reviews: copystate.splice(idx,0,action.userInfo)
        }
  
      default:
        return state;
    }
  
}
  
export default reviewReducer

// let result=[...obj.owned_reviews]
// result.splice(1,0, {
//       "product_id": 1,
//       "name": "Chocolate Chip",
//       "ingredients": [
//         "brown sugar",
//         "chocolate chip",
//         "wheat flour"
//       ],
//       "review_id": 2,
//       "rating": 7
//     })
// console.log(result)