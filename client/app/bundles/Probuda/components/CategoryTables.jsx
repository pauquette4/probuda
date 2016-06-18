import React, { PropTypes } from 'react';
import Rails_Context from './Rails_Context';

import Budget from './Budget';

export default class Budget_Table extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    railsContext: PropTypes.object.isRequired
  };
  
  constructor(props, context) {
    super(props, context);
  }
  
  ablExpenses() {
    return this.props.data.budgets.filter((val) => { 
      return val.category === "Above the Line"}).filter ((val) => {
        return val.total >= 0;
      }).reduce((prev, curr) => {
          return prev + parseFloat(curr.total);
    }, 0);
  }
  
  preExpenses() {
    return this.props.data.budgets.filter((val) => { 
      return val.category === "Pre Production"}).filter ((val) => {
        return val.total >= 0;
      }).reduce((prev, curr) => {
          return prev + parseFloat(curr.total);
    }, 0);
  }
  
  prodExpenses() {
    return this.props.data.budgets.filter((val) => { 
      return val.category === "Production"}).filter ((val) => {
        return val.total >= 0;
      }).reduce((prev, curr) => {
          return prev + parseFloat(curr.total);
    }, 0);
  }
  
  postExpenses() {
    return this.props.data.budgets.filter((val) => { 
      return val.category === "Post Production"}).filter ((val) => {
        return val.total >= 0;
      }).reduce((prev, curr) => {
          return prev + parseFloat(curr.total);
    }, 0);
  }
  
  otherExpenses() {
    return this.props.data.budgets.filter((val) => { 
      return val.category === "Other"}).filter ((val) => {
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
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <div data-toggle="collapse" data-target="#ablTable">
              Above the Line - {totalFormat(this.ablExpenses())}
            </div>
          </div>
          <div className="table-responsive" id="ablTable">
            <table className="table table-striped table-bordered table-hover 
                              table-condensed">
              <thead>
                <tr>
                  <th>Row</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Units</th>
                  <th>X</th>
                  <th>Rate</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {budgets.filter((val) => { 
                return val.category === "Above the Line"})
                  .map((budgets, index) => {
                    var rowNumber = 1 + index++;
                    return <Budget key={budgets.id} budgets={budgets} 
                                   rowNumber={rowNumber}
                                   {...{actions, data, railsContext}}/>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="panel panel-success">
          <div className="panel-heading">
            <div data-toggle="collapse" data-target="#preTable">
              Pre Production - {totalFormat(this.preExpenses())}
            </div>
          </div>
          <div className="table-responsive" id="preTable">
            <table className="table table-striped table-bordered table-hover 
                              table-condensed">
              <thead>
                <tr>
                  <th>Row</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Units</th>
                  <th>X</th>
                  <th>Rate</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {budgets.filter((val) => { 
                return val.category === "Pre Production"})
                  .map((budgets, index) => {
                    var rowNumber = 1 + index++;
                    return <Budget key={budgets.id} budgets={budgets} 
                                   rowNumber={rowNumber}
                                   {...{actions, data, railsContext}}/>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="panel panel-info">
          <div className="panel-heading">
            <div data-toggle="collapse" data-target="#prodTable">
              Production - {totalFormat(this.prodExpenses())}
            </div>
          </div>
          <div className="table-responsive" id="prodTable">
            <table className="table table-striped table-bordered table-hover 
                              table-condensed">
              <thead>
                <tr>
                  <th>Row</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Units</th>
                  <th>X</th>
                  <th>Rate</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {budgets.filter((val) => { 
                return val.category === "Production"})
                  .map((budgets, index) => {
                    var rowNumber = 1 + index++;
                    return <Budget key={budgets.id} budgets={budgets} 
                                   rowNumber={rowNumber}
                                   {...{actions, data, railsContext}}/>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="panel panel-warning">
          <div className="panel-heading">
            <div data-toggle="collapse" data-target="#postTable">
              Post Production - {totalFormat(this.postExpenses())}
            </div>
          </div>
          <div className="table-responsive" id="postTable">
            <table className="table table-striped table-bordered table-hover 
                              table-condensed">
              <thead>
                <tr>
                  <th>Row</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Units</th>
                  <th>X</th>
                  <th>Rate</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {budgets.filter((val) => { 
                return val.category === "Post Production"})
                  .map((budgets, index) => {
                    var rowNumber = 1 + index++;
                    return <Budget key={budgets.id} budgets={budgets} 
                                   rowNumber={rowNumber}
                                   {...{actions, data, railsContext}}/>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="panel panel-danger">
          <div className="panel-heading">
            <div data-toggle="collapse" data-target="#otherTable">
              Other - {totalFormat(this.otherExpenses())}
            </div>
          </div>
          <div className="table-responsive" id="otherTable">
            <table className="table table-striped table-bordered table-hover 
                              table-condensed">
              <thead>
                <tr>
                  <th>Row</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Units</th>
                  <th>X</th>
                  <th>Rate</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {budgets.filter((val) => { 
                return val.category === "Other"})
                  .map((budgets, index) => {
                    var rowNumber = 1 + index++;
                    return <Budget key={budgets.id} budgets={budgets} 
                                   rowNumber={rowNumber}
                                   {...{actions, data, railsContext}}/>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}