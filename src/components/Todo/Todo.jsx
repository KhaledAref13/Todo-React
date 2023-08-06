import { CircleButton } from "../Button";
import { FaTrash } from "react-icons/fa";
import StyledTodo from "./Todo.style";
import { useState } from "react";

const Todo = ({ todos, setTodos, id, completed, description }) => {

  const deleteTodo = () => {
    const allTodos = [...todos];
    let unRemoveTodos = allTodos.filter((todo) => todo.id !== id);
    setTodos(unRemoveTodos);
  };

  const [checked, setChecked] = useState(completed);
  const handleChecked = () => {
    setChecked(!checked);
    const changeStatus = [...todos];
    changeStatus.map((todo) => {
      if (todo.id === id) {
        todo.completed = !checked;
      }
    })
    setTodos(changeStatus)
  };

  return (
    <StyledTodo completed={completed.toString()}>
      <p onClick={handleChecked}>{description}</p>
      <CircleButton width='30px' height='30px' onClick={deleteTodo}><FaTrash /></CircleButton>
    </StyledTodo>
  )
}

export default Todo;
