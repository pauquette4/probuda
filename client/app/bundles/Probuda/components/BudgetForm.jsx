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
  category:'Above the Line',
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change)
    const amount = this.amount.value;
    const units = this.units.value;
    const x = this.x.value;
    const rate = this.rate.value;
    var total = amount*units*x*rate;
    this.setState({total: total});
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
    const category = this.category.value
    this.setState({category: category});
    console.log(description, category);
    $.post (
      '/project',
      {budgets: this.state},
      (data) => {
        var id;
        function test(){
          return $.getJSON('/budgets', JSON.stringify(data));
        }
        $.when(test()).then(function(data) {
          id = data.budget.id;
          addBudgetRow(id, description, amount, units, x, rate, total, category);
          
        });
        this.setState(initialState);
      }
    );
  }
  
  valid() {
    return (this.state.description.length > 0);
  }
  
  render(){
    const { actions, data, railsContext, budgets } = this.props;
    const { deleteBudgetRow } = actions;
    
    return(
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Description"
                 name="description" value={this.state.description} 
                 ref={node => {this.description = node}}  
                 onChange={this.handleChange.bind(this, "description")}
                 />
        </div>
        
        <div className="form-group">
          <input type="number" className="form-control" placeholder="Amount"
                 name="amount" value={this.state.amount} 
                 ref={node => {this.amount = node}} 
                 onChange={this.handleChange.bind(this, "amount")} />
        </div>
        
        <div className="form-group">
          <input type="number" className="form-control" placeholder="Units"
                 name="units" value={this.state.units} 
                 ref={node => {this.units = node}} 
                 onChange={this.handleChange.bind(this, "units")} />
        </div>
        
        <div className="form-group">
          <input type="number" className="form-control" placeholder="X"
                 name="x" value={this.state.x} 
                 ref={node => {this.x = node}} 
                 onChange={this.handleChange.bind(this, "x")} />
        </div>
        
        <div className="form-group">
          <input type="number" className="form-control" placeholder="Rate"
                 name="rate" value={this.state.rate} 
                 ref={node => {this.rate = node}} 
                 onChange={this.handleChange.bind(this, "rate")} />
        </div>
        <div className="form-group">
          <input type="number" className="form-control" placeholder="Total"
                 name="total" value={this.state.total} 
                 ref={node => {this.total = node}} readOnly/>
        </div>
        <div className="form-group">
          <select className="form-control" value={this.state.category} 
                  name="category" 
                  onChange={this.handleChange.bind(this, "category")}
                  ref={node => {this.category = node}}>
            <option value="Above the Line">Above the Line</option>
            <option value="Pre Production">Pre Production</option>
            <option value="Production">Production</option>
            <option value="Post Production">Post Production</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-primary" 
                disabled={!this.valid()}>
        Create Row
        </button>
      </form>
    );
  }
}