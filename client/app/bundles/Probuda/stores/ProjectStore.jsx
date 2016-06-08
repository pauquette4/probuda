import { EventEmitter } from 'events';
import dispatcher from "../dispatcher";

class ProjectStore extends EventEmitter {
  constructor () {
    super()
    this.projects = [
      {
        id: 1232194,
        title: "New Movie"
      },
      {
        id: 1232195,
        title: "New Movie: The Sequel"
      }
    ];
  }
  
  createProject(title) {
    const id = Date.now();
    this.projects.push({
      id,
      title,
    });
    
    this.emit("change");
  }
  
  getAll() {
    return this.projects;
  }
  
  handleActions(action) {
    switch(action.type) {
      case "CREATE_PROJECT": {
        this.createProject(action.title);
      }
    }
  }
  
  
}

const projectStore = new ProjectStore
dispatcher.register(projectStore.handleActions.bind(projectStore))
export default projectStore;