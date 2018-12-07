import React, { Component } from "react";
import Header from "./Header";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import uuid from "uuid/v4";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoItems: {}
    };
  }

  addToDo = text => {
    const todo = {
      uuid: uuid(),
      text: text,
      done: false
    };

    this.setState(state => {
      // computer knows from right to left
      state.toDoItems[todo.uuid] = todo;
      // in the state the empty toDoItems object gets filled with uuid-objects
      // with the content of todo
      console.log("state", state);
      return state;
    });
  };

  updateToDoText = (uuid, text) => {
    this.setState(state => {
      state.toDoItems[uuid].text = text;
      return state;
    });
  };

  toggleToDoDone = event => {
    const checkbox = event.target;

    this.setState(state => {
      state.toDoItems[checkbox.value].done = checkbox.checked;
      return state;
    });
  };

  removeToDo = uuid => {
    this.setState(state => {
      delete state.toDoItems[uuid];
      return state;
    });
  };

  render() {
    return (
      <div className="container">
        <Header tagline="Here are all the next tasks." />
        <ToDoForm addToDo={this.addToDo} />
        <ToDoList
          items={this.state.toDoItems}
          updateToDoText={this.state.updateToDoText}
          toggleToDoDone={this.state.toggleToDoDone}
          removeToDo={this.state.removeToDo}
        />
      </div>
    );
  }
}

export default App;
