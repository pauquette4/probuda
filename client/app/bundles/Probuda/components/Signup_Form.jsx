import React, { PropTypes } from 'react';
import Rails_Context from './Rails_Context'


export default class Signup_Form extends React.Component {
  // constructor(props){
  //   super(props);
    
  //   this.state = {
  //     name:'',
  //     email:'',
  //     password:'',
  //     password_confirmation:''
  //   }
    
  //   this.handleChange = this.handleChange.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }
  
  // handleChange(e){
  
  //   this.setState({[e.target.name]: e.target.value});
  //   console.log(this.state)
  // }
  
  // valid() {
  //       return this.state.title && this.state.date && this.state.amount;
  //   }
  
  // handleSubmit(e) {
  //   e.preventDefault();
  //   $.post(
  //     './users',
  //     {user: this.state},
  //     function(data) {
        
        
        
  //     },
  //     'JSON'
  //   );
  // }
  static PropTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    railsContext: PropTypes.object.isRequired
  }
  
  constructor(props, context) {
    super(props, context);
    
  }
  
  render(){
    const { data, railsContext } = this.props;
    const { authenticity_token, name } = data;
    
    return(
      <form accept-charset="UTF-8" action="/users" 
            class="new_user" id="new_user" method="post">
        <input name="utf8" type="hidden" value="&#x2713;" />
        <input name="authenticity_token" type="hidden"
         value={ authenticity_token } />
        
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Name'
                 id="user_name" name="user[name]" />
        </div>
        
        <div className='form-group'>
          <input type='email' className='form-control' placeholder='Email'
                 id="user_email" name="user[email]" />
        </div>
        
        <div className='form-group'>
          <input type='password' className='form-control' placeholder='Password'
                 id="user_password" name="user[password]" />
        </div>
        
        <div className='form-group'>
          <input type='password' className='form-control' 
                 placeholder='Confirmation' id="user_password_confirmation"
                 name="user[password_confirmation]" />
        </div>
        
         <input className="btn btn-lg btn-default btn-cover" name="commit" 
         type="submit" value="Create my account" />
      </form>
      
    );
  }
  
}