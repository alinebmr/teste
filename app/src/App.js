import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ToDoList from "./pages/ToDoList"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login/>} />
        <Route path="/cadastro" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/todolist" element={<ToDoList/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

