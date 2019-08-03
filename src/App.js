import React from 'react';
import './App.css';
import { async } from 'q';
import Task from "./components/newTask";
import Element from "./components/element";

class App extends React.Component {

  state = {
    tasks: [
      0
    ],
  }

  setTask = (e) => {
    e.preventDefault();
    let taskName = e.target.elements.nameTask.value,
        taskRate = e.target.elements.importantTask.value,
        task     = e.target.elements.task.value,
        id       = 1;
    
        // TODO посмотреть генерация id по дате и времени

    let object = {id: id, name: taskName, rate: taskRate, desc: task};
    
    this.setState(state => ({
      tasks: [...state.tasks, object]
    }))
  }

  render(){
    return (
      <div>
        <div>
          <Task setTask = {this.setTask} />
        </div>
        <div>
          {this.state.tasks.map((task) => <Element key = {task.id} task = {task}  /> )}
        </div>
      </div>
    );
  }
}

export default App;
