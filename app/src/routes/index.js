import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ToDoList from "../pages/ToDoList";
import Perfil from "../pages/Perfil";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todolist" element={<ToDoList/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;