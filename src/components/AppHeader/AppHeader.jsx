import { FaMoon, FaSun } from "react-icons/fa"
import AppTitle from "../AppTitle"
import { CircleButton } from "../Button"
import { styled } from "styled-components"

const AppHeader = ({ state, themeFunction }) => {
  return (
    <StyledAppHeader>
      <AppTitle>Tasks Minder</AppTitle>
      <CircleButton onClick={themeFunction} width='40px' height='40px'>
        {state === 'dark' ? <FaSun /> : <FaMoon />}
      </CircleButton>
    </StyledAppHeader>
  )
}

const StyledAppHeader = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default AppHeader
