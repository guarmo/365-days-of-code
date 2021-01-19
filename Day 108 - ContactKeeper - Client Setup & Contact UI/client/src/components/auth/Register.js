import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Register = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      console.log("Register Submit");
    }
  };

  return (
    <div className="form-container">
      <h1 className="text-center">
        Account <span className="text-primary">Register</span>
      </h1>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => onChange(e)}
            required
            minLength="6"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password2">Confirm Password: </label>
          <input
            type="password"
            name="password2"
            id="password2"
            value={password2}
            onChange={(e) => onChange(e)}
            required
            minLength="6"
          />
        </div>

        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
