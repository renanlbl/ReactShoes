import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.product.id)
        if (productIndex >= 0) {
          draft[productIndex].amount += 1
        } else {
          draft.push({
            ...action.product,
            amount: 1
          })
        }
      })
    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      })
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state
      }
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount)
        }
      })
    }
    default:
      return state
  }
}

// export default function cart(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       const productIndex = state.findIndex(p => p.id === action.product.id);
//       if (productIndex >= 0) {
//         return state.map(p => p.id === action.product.id ? { ...p, amount: p.amount + 1 } : p);
//       } else {
//         return [
//           ...state,
//           { ...action.product, amount: 1 },
//         ]
//       }
//     default:
//       return state;
//   }
// }
