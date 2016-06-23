import React, { PropTypes } from 'react';

var initialState = {
  id: 1,
  title: ''
};

export default class ProjectForm extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    railsContext: PropTypes.object.isRequired,
    currentProject: PropTypes.object.isRequired,
  };
  
  constructor(props, context) {
    super(props, context);
    this.state = initialState;
  }
  
  handleChange(name, e){
    var change={};
    change[name]=e.target.value;
    this.setState(change);
  }
  
  newProject(e){
    e.preventDefault();
    const { actions, data } = this.props;
    const { projects } = data;
    const { addProject, autoBudgetRow } = actions;
    const title = this.title.value;
    
    const index = projects.length;
    $.post(
      '/projects',
      {projects: this.state},
      (data) => {
        var id;
        var project_id;
        function getProjectID(){
          return $.getJSON('/projects', JSON.stringify(data));
        }
        $.when(getProjectID()).then(function(data) {
          project_id = data.project.id;
          console.log(id, title);
          addProject(project_id, title);
        }).then(function() {
          const budgetData = {
            description: "Awesome, Inexpensive Producer",
            amount: 1,
            units: 1,
            x: 1,
            rate: 1,
            total: 1,
            category: "Above the Line",
            project_id: project_id
          };
          ($.post (
            '/budgets',
            {budgets: budgetData},
            (data) => {
              var id;
              function getBudgetID(){
                return $.getJSON('/budgets', JSON.stringify(data));
              }
              $.when(getBudgetID()).then(function(data) {
                id = data.budget.id;
                autoBudgetRow(index, id, budgetData);
              });
            }
          ));
        });
      }
    );
    this.setState(initialState);
  }
  
  render(){

    return (
      <form onSubmit={this.newProject.bind(this)}>
        <input type="text" className="form-control" 
               placeholder="Project Title" name="title"
               value={this.state.title}
               ref={node => this.title = node} 
               onChange={this.handleChange.bind(this, "title")} />
        <br />
        <input type="submit" className="btn btn-default" 
               value="Create Project" />
      </form>
    );
  }
}