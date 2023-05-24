import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ToDoList from "./pages/ToDoList"
import Perfil from "./pages/Perfil";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/todolist" element={<ToDoList/>} />
        <Route path="/perfil" element={<Perfil/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

