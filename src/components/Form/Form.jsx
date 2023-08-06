import { useState } from "react"
import { generate } from 'shortid';
import { FormButton } from "../Button"
import Input from "../Input"
import StyledForm from "./Form.style";
import { FaPlus } from "react-icons/fa";

const Form = ({ todos, setTodos }) => {

  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) {
      alert('Enter Todo Description');
      return;
    }
    const todo = {
      id: generate(),
      description,
      completed: false
    };
    setTodos([...todos, todo]);
    setDescription('');
  };

  return (
    <StyledForm>
      <Input placeholder='Enter Your Todo' state={description} setState={setDescription} />
      <FormButton onClick={handleSubmit}><FaPlus />Add Todo</FormButton>
    </StyledForm>
  )
}

export default Form
