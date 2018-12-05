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
      state.toDoItems[todo.uuid] = todo;
      return state;
    });
  };

  render() {
    return (
      <div className="container">
        <Header tagline="Here are all the next tasks." />
        <ToDoForm addToDo={this.addToDo} />
        <ToDoList />
      </div>
    );
  }
}

export default App;
