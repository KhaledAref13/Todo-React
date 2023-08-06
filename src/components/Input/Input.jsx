import StyledInput from "./Input.style";

const Input = ({ state, setState, placeholder }) => {

  const handleChange = (newState) => {
    setState(newState);
  };

  return (
    <StyledInput placeholder={placeholder} value={state} onChange={(e) => handleChange(e.target.value)} />
  )
}

export default Input
