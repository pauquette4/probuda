import React, { PropTypes } from 'react';
import Rails_Context from './Rails_Context';
import ReactOnRails from 'react-on-rails';

import AmountBox from './AmountBox'
// import BudgetForm from './BudgetForm';

var initialState ={
  description: '',
  amount: 1,
  units: 1,
  x: 1,
  rate: 1,
  total: 1,
}


export default class Budget_Table extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    railsContext: PropTypes.object.isRequired
  };
  
  constructor(props, context) {
    super(props, context);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }
  
  handleChange(e) {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.setState(obj);
    const amount = this.amount.value;
    const units = this.units.value;
    const x = this.x.value;
    const rate = this.rate.value;
    var total = amount*units*x*rate;
    this.setState({total: total});
    console.log(this.state);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { actions, data } = this.props;
    const { addBudgetRow } = actions;
    const { budgets } = data;
    const description = this.description.value;
    const amount = this.amount.value;
    const units = this.units.value;
    const x = this.x.value;
    const rate = this.rate.value;
    const total = this.state.total;
    $.post (
      '/project',
      {budgets: this.state},
      (data) => {
        addBudgetRow(description, amount, units, x, rate, total);
        this.setState(initialState);
      }
    );
  }
  
  handleDeleteEvent(e) {
    e.preventDefault();
  }
  
  handleDelete(id, e) {
    e.preventDefault();
    const { actions } = this.props;
    const { deleteBudgetRow } = actions;
    $.ajax ({
      method: 'DELETE',
      url: "/budgets/" + id,
      dataType: 'JSON',
      success: ( (data) => {
        deleteBudgetRow(id);
      })
    });
  }
  
  valid() {
    return (this.state.description && this.state.amount && this.state.units 
    && this.state.x && this.state.rate);
  }
  
  totalExpenses() {
    var sum = this.props.data.budgets.reduce(function(prev, elem) {
      return prev + elem.total;
    }, 0);
  }
  
  budgetForm(){
    
    return(
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Description"
                 name="description" value={this.state.description} 
                 ref={node => {this.description = node}} 
                 onChange={this.handleChange} />
        </div>
        
        <div className="form-group">
          <input type="number" className="form-control" placeholder="Amount"
                 name="amount" value={this.state.amount} 
                 ref={node => {this.amount = node}}
                 onChange={this.handleChange} />
        </div>
        
        <div className="form-group">
          <input type="number" className="form-control" placeholder="Units"
                 name="units" value={this.state.units} 
                 ref={node => {this.units = node}}
                 onChange={this.handleChange} />
        </div>
        
        <div className="form-group">
          <input type="number" className="form-control" placeholder="X"
                 name="x" value={this.state.x} 
                 ref={node => {this.x = node}}
                 onChange={this.handleChange} />
        </div>
        
        <div className="form-group">
          <input type="number" className="form-control" placeholder="Rate"
                 name="rate" value={this.state.rate} 
                 ref={node => {this.rate = node}}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="number" className="form-control" placeholder="Total"
                 name="total" value={this.state.total} 
                 ref={node => {this.total = node}} readOnly/>
        </div>
        
        <button type="submit" className="btn btn-primary" >
        Create Row
        </button>
      </form>
    );
  }
  // ref={node => {this.id = node}}
  //             value={budgets.id} name="id"
  render(){
    const { actions, data, railsContext } = this.props;
    const { deleteBudgetRow } = actions;
    const { budgets } = data;
    const budgetRows = budgets.map((budgets, index) => {
      return (
          <tr key={budgets.id} budgets={budgets} >
            <td>{budgets.description}</td>
            <td>{budgets.amount}</td>
            <td>{budgets.units}</td>
            <td>{budgets.x}</td>
            <td>{budgets.rate}</td>
            <td>{budgets.total}</td>
            <td>
              <button className="btn btn-danger" 
                      onClick={this.handleDelete.bind(this, budgets.id)}>
                Delete
              </button>
            </td>
          </tr>
      )
    });
    return(
      <div className="budgets content-wrapper">
        <h2 className="title">Project 1</h2>
        <AmountBox type="danger" amount={this.totalExpenses()} text="Total Expenses" />
        <div>
          {this.budgetForm()}
        </div>
        <br />
        <div className="panel panel-primary">
          <div className="panel-heading">
            <div data-toggle="collapse" data-target="#table1">
              Above the Line
            </div>
          </div>
          <div className="table-responsive" id="table1">
            <table className="table table-striped table-bordered table-hover 
                              table-condensed">
              <thead>
                <tr>
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
                {budgetRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}