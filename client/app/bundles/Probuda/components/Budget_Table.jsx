import React, { PropTypes } from 'react';
import Rails_Context from './Rails_Context';
// import ReactOnRails from 'react-on-rails';

import AmountBox from './AmountBox'
import BudgetForm from './BudgetForm';
import CategoryTables from './CategoryTables'

export default class Budget_Table extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    railsContext: PropTypes.object.isRequired
  };
  
  constructor(props, context) {
    super(props, context);
  }
  
  totalExpenses() {
    return this.props.data.budgets.filter ((val) => {
      return val.total >= 0;
    }).reduce((prev, curr) => {
      return prev + parseFloat(curr.total);
    }, 0);
  }
  
  render(){
    const { actions, data, railsContext } = this.props;
    const { deleteBudgetRow } = actions;
    const { budgets } = data;
    
    return(
      <div className="budgets content-wrapper">
        <h2 className="title">Project 1</h2>
        <AmountBox type="danger" amount={totalFormat(this.totalExpenses())} 
                   text="Total Expenses" />
        <div>
          <BudgetForm {...{actions, data, railsContext}} />
        </div>
        <br />
        <div>
          <CategoryTables {...{actions, data, railsContext}} />
        </div>
      </div>
    );
  }
}