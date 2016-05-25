import React from 'react'

export default class Cover extends React.Component {
  render () {
    return (
    
        <div className="site-wrapper-inner">
          <div className="cover-container">
            <div className="masthead clearfix">
              <div className="inner">
                <h3 className="masthead-brand">Probuda</h3>
                <nav>
                  <ul className="nav masthead-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="inner cover">
              <h1 className="cover-heading">Take Control of Your Production Budgets!</h1>
              <p className="lead">Keep track of every budget with an intuitive layout and auto-generated
              charts and graphs. See where the money is going, and how you can improve.</p>
              <p className="lead">
                <a href="#" className="btn btn-lg btn-default btn-cover">Sign Up</a>
              </p>
            </div>
            <div className="mastfoot">
              <div className="inner">
                <p>Probuda, by Bryan Pauquette.</p>
            </div>
          </div>
                
          </div>
        </div>
      
        
    );
  }
  
}