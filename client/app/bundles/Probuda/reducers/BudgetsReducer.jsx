import { ADD_BUDGET_ROW, EDIT_BUDGET_ROW, DELETE_BUDGET_ROW } 
  from '../constants/ProbudaConstants';

const initialState = {
  budgets: [{
    id: 0,
    description: '',
    amount: 0,
    units: 0,
    x: 0,
    rate: 0,
    total: 0,
    category: ''
  }]
};

export default function budgetApp(state = initialState, action) {
  switch (action.type) {
    case 'ADD_BUDGET_ROW':
      return {
        budgets: [
          ...state.budgets,
          {
            id: action.id,
            description: action.description,
            amount: action.amount,
            units: action.units,
            x: action.x,
            rate: action.rate,
            total: action.total,
            category: action.category
          }
        ]
      }
    case 'DELETE_BUDGET_ROW':
      return {
        budgets: [
          ...state.budgets.slice(0, action.row - 1),
          ...state.budgets.slice(action.row)
        ]
      }
    case 'EDIT_BUDGET_ROW':
      var editedRow = {
        id: action.id,
        description: action.description,
        amount: action.amount,
        units: action.units,
        x: action.x,
        rate: action.rate,
        total: action.total
      };
      var newRow = state.budgets.map(budgets =>
        budgets.id === action.id ?
          Object.assign({}, budgets, editedRow) :
          budgets
      );
      var newState = [];
      var i = 0;
      for (i; i < newRow.length; i++) {
        newState.push(newRow[i]);
      }
      return {
        budgets: 
          newState
      }
    default:
      return state;
  }
}