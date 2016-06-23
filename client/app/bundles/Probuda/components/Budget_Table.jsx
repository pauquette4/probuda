import React, { PropTypes } from 'react';
import PureComponent from './PureComponent'
import Rails_Context from './Rails_Context';
import ReactOnRails from 'react-on-rails';

import AmountBox from './AmountBox'
import BudgetForm from './BudgetForm';
import CategoryTables from './CategoryTables'

export default class Budget_Table extends PureComponent {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    railsContext: PropTypes.object.isRequired,
    currentProject: PropTypes.object.isRequired,
  // budgetList: PropTypes.object.isRequired
  // (PropTypes.shape({
  //   index: PropTypes.number,
  //   description: PropTypes.string.isRequired,
  //   amount: PropTypes.number,
  //   units: PropTypes.number,
  //   x: PropTypes.number,
  //   rate: PropTypes.number,
  //   total: PropTypes.number,
  //   category: PropTypes.string
  // }).isRequired),
  };
  
  constructor(props, context) {
    super(props, context);
  }
  
  totalExpenses() {
    const { actions, data, railsContext } = this.props;
    const { deleteBudgetRow } = actions;
    const { budgets, currentProject } = data;
    var id = currentProject.index;
    return this.props.data.budgets[id].filter ((val) => {
      return val.total >= 0;
    }).reduce((prev, curr) => {
      return prev + parseFloat(curr.total);
    }, 0);
  }
  
  render(){
    const { actions, data, railsContext } = this.props;
    const { deleteBudgetRow } = actions;
    const { budgets, currentProject } = data;
    
    return(
      <div className="budgets content-wrapper">
        <h2 className="title">{currentProject.title}</h2>
        <div>
          <AmountBox type="danger" amount={totalFormat(this.totalExpenses())} 
                    text="Total Expenses" />
        </div>
        <div>
          <BudgetForm {...{actions, data, railsContext, currentProject}} />
        </div>
        <br />
        <div>
          <CategoryTables {...{actions, data, railsContext, currentProject}} />
        </div>
      </div>
    );
  }
}