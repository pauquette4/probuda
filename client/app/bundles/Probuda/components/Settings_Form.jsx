import React, { PropTypes } from 'react';
import Rails_Context from './Rails_Context';


export default class Settings_Form extends React.Component {
   static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    railsContext: PropTypes.object.isRequired,
  };
  
  constructor(props, context) {
    super(props, context);
    // this.state = {state: initialState}
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleEmailUpdate = this.handleEmailUpdate.bind(this);
    this.handlePasswordUpdate = this.handlePasswordUpdate.bind(this);
    this.handlePasswordConfirmationUpdate = this.handlePasswordConfirmationUpdate.bind(this);
  }
  
  handleNameUpdate(e){
    const name = this.setState({defaultValue: e.target.value});
    this.props.actions.updateName(name);
    console.log(name);
  }
  
  handleEmailUpdate(e){
    const email = this.setState({defaultValue: e.target.value});
    this.props.actions.updateEmail(email);
    console.log(email);
  }
  
  handlePasswordUpdate(e){
    const password = this.setState({defaultValue: e.target.value});
    this.props.actions.updatePassword(password);
    console.log(password);
  }
  
  handlePasswordConfirmationUpdate(e){
    const password_confirmation = this.setState({defaultValue: e.target.value});
    this.props.actions.updatePasswordConfirmation(password_confirmation);
    console.log(password_confirmation);
  }
  
  render(){
    const { data, railsContext } = this.props;
    const { authenticity_token, name, id, email, logged_in } = data;
    return(
      <div className="content-wrapper">
        <h1>Update your profile below, {name}:</h1>
        <h2>{logged_in ? "Yes" : "No"}</h2>
        <br />
        <div class="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form className="edit_user" id={`edit_user_${id}`} action={`/users/${id}`}
                  accept-charset="UTF-8" method="post" >
              <input name="utf8" type="hidden" value="&#x2713;" />
              <input type="hidden" name="_method" value="patch" />
              <input name="authenticity_token" type="hidden"
                     value={ authenticity_token } />
              
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name"
                       id="user_name" name="user[name]" defaultValue={name} 
                       onChange={this.handleNameUpdate} />
              </div>
              
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email"
                       id="user_email" name="user[email]" defaultValue={email} 
                       onChange={this.handleEmailUpdate} />
              </div>
              
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password"
                       id="user_password" name="user[password]" 
                       onChange={this.handlePasswordUpdate} />
              </div>
              
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Confirmation"
                       id="user_password_confirmation" 
                       name="user[password_confirmation]" 
                       onChange={this.handlePasswordConfirmationUpdate} />
              </div>
              
              <input className="btn btn-lg btn-default btn-cover-invert" name="commit" 
                     type="submit" value="Save Changes" 
                     data-disable-with="Save Changes" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}