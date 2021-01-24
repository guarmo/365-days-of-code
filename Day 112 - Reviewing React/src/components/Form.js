import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      text: "",
      gender: "",
      favColor: "",
      isFriendly: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      firstName,
      lastName,
      text,
      gender,
      favColor,
      isFriendly,
    } = this.state;
    console.log(firstName, lastName, text, gender, favColor, isFriendly);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First name"
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          placeholder="Last name"
          onChange={(e) => this.handleChange(e)}
        />
        <textarea
          name="text"
          cols="30"
          rows="10"
          value={this.state.text}
          onChange={this.handleChange}
        ></textarea>
        <br />
        <input
          type="checkbox"
          name="isFriendly"
          checked={this.state.isFriendly}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          checked={this.state.gender === "male"}
          onChange={this.handleChange}
        />{" "}
        Male
        <br />
        <input
          type="radio"
          name="gender"
          value="female"
          checked={this.state.gender === "female"}
          onChange={this.handleChange}
        />{" "}
        Female
        <br />
        <select
          name="favColor"
          value={this.state.favColor}
          onChange={this.handleChange}
        >
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
