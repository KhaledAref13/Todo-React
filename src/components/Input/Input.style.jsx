import { styled } from "styled-components";
import device from "../../device";

const StyledInput = styled.input.attrs({
  type: 'text'
})`
    border: none;
    outline: none;
    padding: 14px;
    background-color: ${({ theme }) => theme.inputBackgroundColor};
    color: ${({ theme }) => theme.inputTextColor};
    font-size: 1rem;
    flex: 1;
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    @media ${device.mobileS} {
      width: 100%;
      padding: 12px;
      margin-bottom: 10px;
      border-radius: 0.2rem;
    }
    @media ${device.mobileL} {
      width: 100%;
      padding: 12px;
      margin-bottom: 10px;
      border-radius: 0.2rem;
    }
`;

export default StyledInput;