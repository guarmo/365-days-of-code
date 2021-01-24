// import React from "react";

// class Class extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       answer: "Yes",
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.answer}</h1>
//       </div>
//     );
//   }
// }

// export default Class;

// import React from "react";

// const Class = () => {
//   const handleClick = () => console.log("I was clicked");

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// };

// export default Class;

// import React from "react";

// class Class extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.double = this.double.bind(this);
//   }

//   handleClick() {
//     this.setState({ count: this.state.count + 1 });
//     this.setState((prevState) => {
//       return {
//         count: prevState.count + 1,
//       };
//     });
//   }

//   double() {
//     this.setState((prevState) => {
//       return {
//         count: prevState.count * 2,
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Add</button>
//         <button onClick={this.double}>Double</button>
//       </div>
//     );
//   }
// }

// export default Class;

import React, { Component } from "react";
import Conditional from "./Conditional";

class Class extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <Conditional isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default Class;
