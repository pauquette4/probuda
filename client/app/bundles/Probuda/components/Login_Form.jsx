import React, { PropTypes } from 'react';
import Rails_Context from './Rails_Context';



export default class Login_Form extends React.Component {
  
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
      
      <form accept-charset="UTF-8" action="/login"
            method="post">
        <input name="utf8" type="hidden" value="&#x2713;" />
        <input name="authenticity_token" type="hidden"
         value={ authenticity_token } />
        <div className='form-group'>
          <input type='email' className='form-control' placeholder='Email'
                 id="session_email" name="session[email]">
          </input>
        </div>
        
        <div className='form-group'>
          <input type='password' className='form-control' placeholder='Password'
                 id="session_password"
                 name="session[password]" 
                 >
          </input>
        </div>
        <label className="checkbox inline" for="session_remember_me">
          <input name="session[remember_me]" type="hidden" value="0" />
          <input type="checkbox" value="1" name="session[remember_me]" 
                 id="session_remember_me" />
          <span>Remember me on this computer</span>
        </label>
        <input className="btn btn-lg btn-default btn-cover" name="commit" type="submit"
               value="Log In" data-disable-with="Log in" />    
      </form>
        
    );
  } 
}















