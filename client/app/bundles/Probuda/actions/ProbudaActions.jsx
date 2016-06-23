import * as types from '../constants/ProbudaConstants'

export function addBudgetRow(index, id, description, amount, units, x, rate, total, category) {
  return {
    type: types.ADD_BUDGET_ROW,
    index,
    id,
    description, 
    amount, 
    units, 
    x, 
    rate,
    total,
    category,
    
  }
}

export function autoBudgetRow(index, id, budgetData) {
  return {
    type: types.AUTO_BUDGET_ROW,
    index,
    id,
    budgetData,
    
  }
}

export function deleteBudgetRow(index, row) {
  return { 
    type: types.DELETE_BUDGET_ROW,
    index,
    row
  }
}

export function editBudgetRow(index, row, id, description, amount, units, x, 
                              rate, total) {
  return {
    type: types.EDIT_BUDGET_ROW,
    index,
    row,
    id,
    description, 
    amount, 
    units, 
    x, 
    rate,
    total
  }
}

export function addProject(id, title) {
  return {
    type: types.ADD_PROJECT,
    id,
    title,
  }
}

// export function deleteProject(id, title) {
//   return {
//     type: types.DELETE_PROJECT,
//     id,
//     title
//   }
// }

// export function editProject(id, title) {
//   return {
//     type: types.EDIT_PROJECT,
//     id,
//     title
//   }
// }

export function changeProject(index, id, title) {
  return {
    type: types.CHANGE_PROJECT,
    index,
    id,
    title
  }
}