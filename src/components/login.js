import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../utils/card";
import "./login.css";

const Login = () => {

  const userCredentials = {
    userName: "Maha",
    password: "Maha",
  };

  const [loginCredentials, setLoginCredentials] = useState({
    userName : "",
    password : ""
  });

  const navigate = useNavigate();

  const inputChangeHandler = (event) => {
    console.log(event.target.name);
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(loginCredentials);
    if (
      userCredentials.userName === loginCredentials.userName &&
      userCredentials.password === loginCredentials.password
    ) {
      navigate("/home");
    } else {
      alert("Enter Correct UserName and Password");
    }
  };

  return (
    <>
      <Card>
        <div className="heading">Login page</div>
        <form method="post" className="form" onSubmit={onSubmitHandler}>
          <p>Username</p>
          <input
            name="userName"
            onChange={inputChangeHandler}
            className="input"
            type="text"
            placeholder="Enter Username"
          />
          <p>Password</p>
          <input
            name="password"
            onChange={inputChangeHandler}
            className="input"
            type="password"
            placeholder="Enter Password"
          />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </Card>
    </>
  );
};

export default Login;
