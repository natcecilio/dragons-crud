import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendHeader ? '100vh' : '80px')};
  background-color: #fff;
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 60%;
  display: flex;
  align-items: center;
  padding-left: 5%;
  
`

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: center;
  padding-right: 50px;
 
`
export const HeaderInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`

export const HeaderExtendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`

export const HeaderLinkContainer = styled.div`
  display: flex;
`

export const HeaderLink = styled(Link)`
  color: #707070;
  font-size: 1.3rem;
  font-weight: 600;
  font-family: 'Roboto', serif;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const HeaderLinkExtend = styled(Link)`
  color: #707070;
  font-size: 1.2rem;
  font-family: 'Roboto', serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #ffbd31;
  font-size: 45px;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }
`;