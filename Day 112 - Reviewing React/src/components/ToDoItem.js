// import React, { Fragment } from "react";

// const ToDoItem = (props) => {
//   const { completed, text } = props.todo;

//   return (
//     <Fragment>
//       <input
//         type="checkbox"
//         checked={completed}
//         value={completed}
//         onChange={() => console.log("Changed")}
//       />
//       <p>{text}</p>
//     </Fragment>
//   );
// };

// export default ToDoItem;

import React, { Fragment } from "react";

function ToDoItem(props) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo.id)}
      />
      <p>{props.todo.text}</p>
    </div>
  );
}

export default ToDoItem;
