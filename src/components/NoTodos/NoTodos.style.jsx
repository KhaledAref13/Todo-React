import { styled } from "styled-components"
import device from "../../device";

const StyledNoTodos = styled.div`
  width: 70%;
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    width: 40%;
  }
  p{
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: 500;
  }
  @media ${device.mobileS} {
    width: 100%;
    img{
      width: 50%;
    }
  }
  @media ${device.mobileL} {
    width: 100%;
    img{
      width: 50%;
    }
  }
  @media ${device.tablet} {
    width: 100%;
    img{
      width: 50%;
    }
  }
`;

export default StyledNoTodos;