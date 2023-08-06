import { styled } from "styled-components";
import device from "../../device";

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-start;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

export default StyledForm;