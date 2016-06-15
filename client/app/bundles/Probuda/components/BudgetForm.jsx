import React from 'react';

var initialState= {
    description: '',
    amount: '',
    units: '',
    x: '',
    rate: '',
    user_id: this.props.data.id
  };
  
export default class BudgetForm extends React.Component {
  
  constructor(){
    super();
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    var name = e.target.name;
    var obj = {};
    obj[name] = e.target.value;
    this.setState(obj);
    console.log(this.state);
  }
  
  // handleSubmit(e) {
  //   e.preventDefault();
  //   $.post(
  //     '/project',
  //     {budgets: this.state},
  //     (data) => {
  //       this.props.handleNewRow(data);
  //       this.setState(this.getInitialState());
  //     }
  //   )
  // }
  
  valid() {
    return (this.state.description && this.state.amount && this.state.units 
    && this.state.x && this.state.rate);
  }
    
  render(){
    return(
      <form className="form-inline" action='/project' 
      method='post' accept-charset='UTF-8'>
        <input type='hidden' name='utf8' value='✓' />
        <input type='hidden' name='authenticity_token' value={this.props.data.authenticity_token} />
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Description"
                 name="description" value={this.state.description} 
                 onChange={this.handleChange} />
        </div>
        
        <div className="form-group">
          <input type="number" className="form-control" placeholder="Amount"
                 name="amount" value={this.state.amount} 
                 onChange={this.handleChange} />
        </div>
        
        <div className="form-group">
          <input type="number" className="form-control" placeholder="Units"
                 name="units" value={this.state.units} 
                 onChange={this.handleChange} />
        </div>
        
        <div className="form-group">
          <input type="number" className="form-control" placeholder="X"
                 name="x" value={this.state.x} 
                 onChange={this.handleChange} />
        </div>
        
        <div className="form-group">
          <input type="number" className="form-control" placeholder="Rate"
                 name="rate" value={this.state.rate} 
                 onChange={this.handleChange} />
        </div>
        
        <button type="submit" className="btn btn-primary" disabled={!this.valid}>
        Create Row
        </button>
      </form>
    );
  }
}