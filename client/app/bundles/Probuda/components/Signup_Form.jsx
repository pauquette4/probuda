import React from 'react'


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
  
  
  render(){
    return(
      
      <form className='form-inline' accept-charset="UTF-8" action="/users" 
            class="new_user" id="new_user" method="post">
        <input name="utf8" type="hidden" value="&#x2713;" />
        <input type="hidden" name="authenticity_token" 
        value="uTKq8gxQn0e2a2Ydw4XIfURytIMHe9i67Qxys4H8NTgBIWMq1/rD5gd3KEqcQqyVGHAcHcoJ9nV5Ag/1baaFvA==" />
        
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Name'
                 id="user_name" name="user[name]" >
          </input>
        </div>
        
        <div className='form-group'>
          <input type='email' className='form-control' placeholder='email'
                 id="user_email" name="user[email]" >
          </input>
        </div>
        
        <div className='form-group'>
          <input type='password' className='form-control' placeholder='Password'
                 id="user_password" name="user[password]">
          </input>
        </div>
        
        <div className='form-group'>
          <input type='password' className='form-control' placeholder='Confirmation'
                 id="user_password_confirmation"
                 name="user[password_confirmation]" 
                 >
          </input>
        </div>
        
         <input className="btn btn-primary" name="commit" type="submit"
         value="Create my account" />
      </form>
      
    );
  }
  
}