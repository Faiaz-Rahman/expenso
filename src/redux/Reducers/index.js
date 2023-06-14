import { combineReducers } from 'redux'

const initialState = []

const initialTotal = 0

const addCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]
    case 'addAmountOnly':
      let tmpArr = state.filter(
        item => item.category === action.payload.category,
      )
      let amountNum = action.payload.expense
      amountNum = amountNum.toString()
      tmpArr[0].expense = amountNum
      return [...state]

    default:
      return [...state]
  }
}

const addTotalReducer = (state = initialTotal, action) => {
  switch (action.type) {
    case 'update_total':
      state = state + action.payload.expense
      return state

    default:
      return state
  }
}

const rootReducer = combineReducers({
  add: addCategoryReducer,
  total: addTotalReducer,
})

export { rootReducer }
