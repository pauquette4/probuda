import dispatcher from '../dispatcher';

export function createProject(title){
  dispatcher.dispatch({
     type: "CREATE_PROJECT",
     title
  });
}

export function deleteProject(id){
  dispatcher.dispatch({
     type: "DELETE_PROJECT",
     id
  });
}