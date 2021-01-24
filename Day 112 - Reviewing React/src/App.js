// // FUNCTIONAL COMPONENT
// // import "./App.css";
// // import { useState, Fragment } from "react";
// // import ToDoItem from "./components/ToDoItem";
// // import todosData from "./todosData";
// // // import Class from "./components/Class";

// // const App = () => {
// //   const [todos, setTodos] = useState(todosData);

// //   const todosRender = todos.map((todo) => (
// //     <ToDoItem key={todo.id} todo={todo} />
// //   ));
// //   return todosRender;
// //   // return <Class />;
// // };

// // export default App;

// // CLASS COMPONENT
import React, { Fragment } from "react";
import "./App.css";
import ToDoItem from "./components/ToDoItem";
import todosData from "./todosData";
import Class from "./components/Class";
import Form from "./components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todosData,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    // this.setState((prevState) => {
    //   return prevState.todos.forEach((item) =>
    //     item.id === id ? item.completed === !item.completed : item
    //   );
    // });

    this.setState((prevState) => {
      const updatedTods = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTods,
      };
    });
  }

  componentDidMount() {
    // Get the data I need to correctly display
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
      // return true if want it to update
      // return false if not
    }
  }

  componentWillUnmount() {
    // teardown or cleanup your code before your component disappears
    // remove event listener
  }

  render() {
    const todoItems = todosData.map((todo) => (
      <ToDoItem key={todo.id} todo={todo} handleChange={this.handleChange} />
    ));

    return (
      <Fragment>
        {todoItems}
        <Class />
        <Form />
      </Fragment>
    );
  }
}

export default App;
