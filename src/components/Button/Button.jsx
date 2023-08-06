import { styled } from "styled-components"
import device from "../../device";

const Button = styled.button`
  padding: 14px 35px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  outline: none;
  border-radius: 0.2rem;
  transition-duration: 0.3s;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  &:hover{
    background-color: ${({ theme }) => theme.hoverButtonBackgroundColor};
  }
  @media ${device.mobileS} {
    width: 100%;
    padding: 12px 35px;
  }
  @media ${device.mobileL} {
    width: 100%;
    padding: 12px 35px;
  }
`;

const FormButton = styled(Button)`
  border-radius: 0;
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  @media ${device.mobileS} {
    border-radius: 0.2rem;
  }
  @media ${device.mobileL} {
    border-radius: 0.2rem;
  }
`;

const CircleButton = styled(Button)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Button, FormButton, CircleButton }
