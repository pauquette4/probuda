import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Rails_Context from './Rails_Context';

var initialState ={
  description: '',
  amount: 1,
  units: 1,
  x: 1,
  rate: 1,
  total: 1,
  editing: false
}

export default class Budget extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    railsContext: PropTypes.object.isRequired
  };
  
  constructor(props, context) {
    super(props, context);
    this.state = initialState;
    this.handleToggle = this.handleToggle.bind(this);
  }
  
  handleDelete(row, id, e) {
    e.preventDefault();
    const { actions, data } = this.props;
    const { currentProject } = data;
    const { deleteBudgetRow } = actions;
    var index = currentProject.index
    $.ajax ({
      method: 'DELETE',
      url: "/budgets/" + id,
      dataType: 'JSON',
      success: ( (data) => {
        deleteBudgetRow(index, row);
      })
    });
  }
  
  handleToggle(e) {
    e.preventDefault();
    this.setState({editing: !this.state.editing})
  }
  
  handleEditing(name, e) {
    this.setState({
      description: this.description.value,
      amount: this.amount.value,
      units: this.units.value,
      x: this.x.value,
      rate: this.rate.value,
      total: this.total.value
    });
    var change = {};
    change[name] = e.target.value;
    this.setState(change)
  }
  
  handleUpdate(row, id, e) {
    e.preventDefault();
    const { actions, data } = this.props;
    const { editBudgetRow } = actions;
    const { budgets, currentProject } = data
   
    var editedData = {
      description: this.state.description,
      amount: this.state.amount,
      units: this.state.units,
      x: this.state.x,
      rate: this.state.rate,
      total: this.state.total,
    }
  
    const description = this.state.description;
    const amount = this.state.amount;
    const units = this.state.units;
    const x = this.state.x;
    const rate = this.state.rate;
    var total = amount*units*rate*x;
    var index = currentProject.index
    
    $.ajax ({
      method: 'PUT',
      url: "/budgets/" + id,
      dataType: 'JSON',
      data: { budgets: editedData },
      success: ( (data) => {
        editBudgetRow(index, row, id, description, amount, units, 
                      x, rate, total);
      })
    });
    this.setState({editing: false});
  }
  
  sheetRow() {
    const { actions, data, railsContext , budgets, rowNumber} = this.props;
    const { deleteBudgetRow } = actions;
    return (
      <tr>
        <td>{rowNumber}</td>
        <td>{budgets.description}</td>
        <td>{budgets.amount}</td>
        <td>{budgets.units}</td>
        <td>{budgets.x}</td>
        <td>{budgets.rate}</td>
        <td>{budgets.total}</td>
        <td>
          <a className="btn btn-primary" 
                  onClick={this.handleToggle}>
            Edit
          </a>
        </td>
        <td>
          <a className="btn btn-danger" 
                  onClick={this.handleDelete.bind(this, rowNumber, budgets.id)}>
            Delete
          </a>
        </td>
      </tr>
    );
  }
  
  sheetRowForm() {
    const { actions, data, railsContext, budgets, rowNumber } = this.props;
    const { deleteBudgetRow } = actions;
    return (
      <tr>
        <td>{rowNumber}</td>
        <td><input type="text" className="form-control" 
                   name="description" 
                   defaultValue={budgets.description}
                   ref={node => {this.description = node}}
                   onChange={this.handleEditing.bind(this, "description")}/>
        </td>
        <td><input type="number" className="form-control" 
                   name="amount" 
                   defaultValue={budgets.amount}
                   ref={node => {this.amount = node}}
                   onChange={this.handleEditing.bind(this, "amount")}/>
        </td>
        <td><input type="number" className="form-control" 
                   name="units" 
                   defaultValue={budgets.units}
                   ref={node => {this.units = node}}
                   onChange={this.handleEditing.bind(this, "units")} />
        </td>
        <td><input type="number" className="form-control" 
                   name="x" 
                   defaultValue={budgets.x} 
                   ref={node => {this.x = node}}  
                   onChange={this.handleEditing.bind(this, "x")} />
        </td>
        <td><input type="number" className="form-control" 
                   name="rate" 
                   defaultValue={budgets.rate}
                   ref={node => {this.rate = node}} 
                   onChange={this.handleEditing.bind(this, "rate")}/>
        </td>
        <td><input type="number" className="form-control" 
                   name="total" 
                   defaultValue={budgets.total}
                   ref={node => {this.total = node}}
                   onChange={this.handleEditing.bind(this, "total")} readOnly />
                   
        </td>
        <td>
          <a className="btn btn-primary"
                  onClick={this.handleUpdate.bind(this, rowNumber, budgets.id)}>
            Update
          </a>
        </td>
        <td>
          <a className="btn btn-danger" 
                  onClick={this.handleToggle}>
            Cancel
          </a>
        </td>
      </tr>
    );
  }
  
  render() {
    return this.state.editing ? this.sheetRowForm() : this.sheetRow();
  }
} 