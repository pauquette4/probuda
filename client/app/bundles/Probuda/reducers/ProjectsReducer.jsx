import { ADD_PROJECT, ADD_BUDGET_ROW, AUTO_BUDGET_ROW } from '../constants/ProbudaConstants';
import React from 'react';
var update = require('react/lib/update')
  
const initialState = {
  projects: [{
    id: 0,
    title: '',
  }],
  budgets: [{
    id: 0,
    description: '',
    amount: 0,
    units: 0,
    x: 0,
    rate: 0,
    total: 0,
    category: ''
  }],
  currentProject: {
    index: 0,
    title: ''
  },
};

export default function projectApp(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PROJECT':
      var projects = update(
                              state.projects, 
                              {$push: [{ id: action.id, title: action.title }]}
                             );
     
      return {
        ...state,
        projects,
      };
    case 'AUTO_BUDGET_ROW':
      var budgets = update(state.budgets,
                            {$merge:
                              {[action.index]:
                                [{ 
                                  id: action.id,
                                  description: action.budgetData.description,
                                  amount: action.budgetData.amount,
                                  units: action.budgetData.units,
                                  x: action.budgetData.x,
                                  rate: action.budgetData.rate,
                                  total: action.budgetData.total,
                                  category: action.budgetData.category 
                                }]
                              }
                            }
                          );
      return {
        ...state,
        budgets
      };
    case 'ADD_BUDGET_ROW':
      budgets = update(state.budgets,
                        {[action.index]:
                          {$push: 
                            [{ 
                              id: action.id,
                              description: action.description,
                              amount: action.amount,
                              units: action.units,
                              x: action.x,
                              rate: action.rate,
                              total: action.total,
                              category: action.category 
                            }]
                          }
                        }
                      );
      return {
        ...state,
        budgets
      };
    case 'CHANGE_PROJECT':
      return {
        ...state,
        currentProject: 
          {
            index: action.index,
            id: action.id,
            title: action.title,
          }
      };
      // budgets: [[{},{},{},{}],[],[]]
    case 'DELETE_BUDGET_ROW':
      budgets = update(state.budgets, 
                          {[action.index]:{$splice: [[action.row - 1, 1]]}});
      return {
        ...state,
        budgets
      };
    case 'EDIT_BUDGET_ROW':
      budgets = update(state.budgets, 
                            {[action.index]: 
                              {[action.row - 1]: 
                                {
                                  id: {$set: action.id},
                                  description: {$set: action.description},
                                  amount: {$set: action.amount},
                                  units: {$set: action.units},
                                  x: {$set: action.x},
                                  rate: {$set: action.rate},
                                  total: {$set: action.total},
                                }
                              }  
                            }
                          );
      return {
        ...state,
        budgets
      };
    default:
     return state;
  }
}