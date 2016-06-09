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
    
  }
  render(){
    const { data, railsContext } = this.props;
    const { authenticity_token, name, id, email } = data;
    const formAction = "/users/edit/"+{id};
    return(
      <div className="content-wrapper">
        <h1>Update your profile: {authenticity_token}</h1>
        <h2> {id} {name} {email} </h2>
        <br />
        <div class="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form className="edit_user" id={`edit_user_${id}`} action={`/users/edit/${id}`}
                  accept-charset="UTF-8" method="post">
              <input name="utf8" type="hidden" value="&#x2713;" />
              <input name="authenticity_token" type="hidden"
                     value={ authenticity_token } />
              <input type="hidden" name="_method" value="patch" />
              
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Name"
                       id="user_name" name="user[name]" value={name} />
              </div>
              
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Email"
                       id="user_email" name="user[email]" value={email}/>
              </div>
              
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Password"
                       id="user_password" name="user[password]" />
              </div>
              
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Confirmation"
                       id="user_password_confirmation" 
                       name="user[password_confirmation]" />
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