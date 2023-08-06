import { useState } from "react";
import Form from "../Form";
import StyledAppWrapper from "./AppWrapper.style";
import AppHeader from "../AppHeader";
import TodosWrapper from "../TodosWrapper";

const AppWrapper = ({ state, setState }) => {
  const themeToggler = () => {
    state === 'light' ? setState('dark') : setState('light')
  };
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  localStorage.setItem('todos', JSON.stringify(todos))
  return (
    <StyledAppWrapper>
      <AppHeader state={state} themeFunction={themeToggler} />
      <Form todos={todos} setTodos={setTodos} />
      <TodosWrapper todos={todos} setTodos={setTodos} />
    </StyledAppWrapper>
  );
};

export default AppWrapper