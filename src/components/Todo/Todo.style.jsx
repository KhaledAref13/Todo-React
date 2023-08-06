import { styled } from "styled-components";

const borderTheme = ({ theme }) => theme.buttonBackgroundColor;
const boxTheme = ({ theme }) => theme.boxBackgroundColor

const StyledTodo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: ${({ theme }) => theme.boxBackgroundColor};
  margin-bottom: 20px;
  border-left: 3px solid ${({ completed }) => completed === 'true' ? borderTheme : boxTheme};
  &:last-child{
    margin-bottom: 0;
  }
  p{
    cursor: pointer;
    text-decoration: ${({ completed }) => completed === 'true' ? 'line-through' : 'none'};
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  button{
    margin-left: auto; 
    font-size: 0.8rem;
  }
`;

export default StyledTodo