import { styled } from "styled-components";
import device from "../../device";

const AppTitle = styled.h2`
  letter-spacing: 1px;
  @media ${device.mobileS} {
    font-size: 1.3rem;
  }
  @media ${device.mobileL} {
    font-size: 1.4rem;
  }
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export default AppTitle