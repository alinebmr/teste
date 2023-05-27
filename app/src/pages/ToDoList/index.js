import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../../componentes/Form/Form";
import TodoItem from "../../componentes/Form/ToDoItem";
import "./styles.css"
import HeaderToDoList from "../../componentes/HeaderToDoList";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import SignButtom from "../../componentes/SignButton";

export default function ToDoList() {
  const {signout} = useAuth;
  const navigate = useNavigate;
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);
    setTodos(filtered);
  };

  const editTodo = (id, editedText) => {
    var todosArray = todos;

    for (var i in todosArray) {
      if (todosArray[i].id === id) {
        todosArray[i].text = editedText;
      }
    }

    // console.log(todosArray);
    // todosArray.splice(todosArray.id, 1, { text: editedText, id: id });
    // console.log(todosArray);
    setTodos(todosArray);
  };

  return (
        <div id="header">
          <HeaderToDoList/>
        
          <SignButtom  Text="Sair" onClick={() => [signout(), navigate("/")]}>
            Sair
          </SignButtom>
          <Container maxWidth="xs" style={{ marginTop: "1em" }}>
          <Form addTodo={addTodo} />
          <List sx={{ marginTop: "1em" }}>
          {todos.map((todo) => (
        <div key={todo.id} style={{ marginTop: "1em" }}>
            <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} />
        </div>
        ))}
        </List>
        </Container>
        </div>
        
   
  );
}