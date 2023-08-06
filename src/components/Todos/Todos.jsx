import { styled } from "styled-components";
import Todo from "../Todo"
import { Button } from "../Button";
import { FaTrash } from "react-icons/fa";

const Todos = ({ todos, setTodos }) => {
  const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos'));
  const completedTodosNumber = todos.filter((todo) => todo.completed === true).length;

  const deleteAllTodos = () => {
    setTodos([]);
    localStorage.setItem('todos', JSON.stringify(todos))
  };

  return (
    <StyledTodos>
      <TodosTopBar>
        <h3>Your Todos</h3>
        <p>{completedTodosNumber} From {todos.length}</p>
      </TodosTopBar>
      {todosFromLocalStorage.map((todo) => {
        return (
          <Todo key={todo.id} todos={todos} setTodos={setTodos} id={todo.id} completed={todo.completed} description={todo.description} />
        )
      })}
      <Button onClick={deleteAllTodos}><FaTrash />Delete All</Button>
    </StyledTodos>
  )
}
const StyledTodos = styled.div`
  margin-top: 40px;
`;

const TodosTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export default Todos
