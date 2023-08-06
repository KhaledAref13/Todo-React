import { styled } from "styled-components";
import device from "../../device";

const StyledAppWrapper = styled.div`
  padding: 30px 150px;
  @media ${device.mobileS} {
    padding: 30px 10px;
  }
  @media ${device.mobileL} {
    padding: 30px 10px;
  }
  @media ${device.tablet} {
    padding: 30px 40px;
  }
`;

export default StyledAppWrapper;