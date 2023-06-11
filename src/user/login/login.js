import React from "react";
import Button from "@mui/material/Button";
import "./Login.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#db2b39",
    },
  },
});

const loginSubmitHandler = (event) => {
  event.preventDefault();
};

const Login = () => {
  return (
    <div className="divLogin" onSubmit={loginSubmitHandler}>
      <h1>Iniciar Sesion</h1>
      <form method="get" action="javascript: void(0);" id="login-form" className="login-form" autocomplete="off" role="main">
        <h1 className="a11y-hidden">Login Form</h1>
        <div>
          <label className="label-alias">
            <input type="name" className="text" name="alias" placeholder="Alias" tabindex="1" required />
            <span class="required">Alias</span>
          </label>
        </div>
        <input type="checkbox" name="show-password" class="show-password a11y-hidden" id="show-password" tabindex="3" />
        <label class="label-show-password" for="show-password">
          <span>Show Password</span>
        </label>
        <div>
          <label class="label-password">
            <input type="text" class="text" name="password" placeholder="Password" tabindex="2" required />
            <span class="required">Contraseña</span>
          </label>
        </div>
        
        <div className="email">
          <Link to="/survey1"><input type="submit" value="Log In" /></Link>
          <Link to="/register">No tienes una cuenta?</Link>
        </div>        
      </form>
    </div>
  );
};

export default Login;
