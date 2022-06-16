import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { Context } from "../../context/Context";
import "./login.css";

const Login = () => {

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://tryblogin.herokuapp.com/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <>
    <Navbar/>
    <div className="login">
      <h1>Inicio de Sesión</h1>
      <div className="loginForm">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nombre de usuario" ref={userRef}/>
          <input type="password" placeholder="Contraseña" ref={passwordRef}/>
          <button className="loginBtn" type="submit">
            Iniciar Sesión
          </button>
          <br />
          <p className="orRegister">
            ¿No tienes cuenta?
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span className="orRegister orReghover"> Registrate</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
