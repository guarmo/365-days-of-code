import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submit");
  };

  return (
    <div className="form-container">
      <h1 className="text-center">
        Account <span className="text-primary">Login</span>
      </h1>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>

        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
