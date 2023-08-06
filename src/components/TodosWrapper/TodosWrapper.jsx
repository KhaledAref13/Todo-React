import NoTodos from "../NoTodos"
import Todos from "../Todos/Todos"

const TodosWrapper = ({ todos, setTodos }) => {
  if (todos.length) {
    return <Todos todos={todos} setTodos={setTodos}/>
  } else {
    return <NoTodos />
  }
}

export default TodosWrapper
