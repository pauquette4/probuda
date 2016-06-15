import { ADD_BUDGET_ROW, DELETE_BUDGET_ROW } from '../constants/ProbudaConstants';

const initialState = {
  budgets: [{
    id: 0,
    description: '',
    amount: 0,
    units: 0,
    x: 0,
    rate: 0,
    total: 0
  }]
};

export default function budgetApp(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BUDGET_ROW':
      return {
        budgets: [
          ...state.budgets,
          {
            id: Date.now(),
            description: action.description,
            amount: action.amount,
            units: action.units,
            x: action.x,
            rate: action.rate,
            total: action.total
          }
        ]
      }
      case 'DELETE_BUDGET_ROW':
        return {
          budgets: [
            ...state.budgets.slice(1, action.id),
            ...state.budgets.slice(action.id)
          ]
        }
      default:
        return state;
  }
}