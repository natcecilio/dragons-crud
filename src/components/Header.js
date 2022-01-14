import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderInnerContainer,
  LeftContainer,
  RightContainer,
  HeaderExtendContainer,
  HeaderLinkContainer,
  HeaderLink,
  Logo,
  OpenButton,
  HeaderLinkExtend,
} from "./styles/Header.style";
import LogoImg from "../assets/logo-finale.png";

const Header = () => {
  const [extendHeader, setExtendHeader] = useState(false);

  return (
    <HeaderContainer extendHeader={extendHeader}>
      <HeaderInnerContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
        <LeftContainer>
          <HeaderLinkContainer>
            <HeaderLink to="/"> Listar Dragões</HeaderLink>
            <HeaderLink to="/add">Adicionar Dragões</HeaderLink>
            <OpenButton
              onClick={() => {
                setExtendHeader((curr) => !curr);
              }}
            >
              {extendHeader ? <> &#10005; </> : <> &#8801; </>}
            </OpenButton>
          </HeaderLinkContainer>
        </LeftContainer>
      </HeaderInnerContainer>

      {extendHeader && (
        <HeaderExtendContainer>
          <HeaderLinkExtend to="/"> Lista de Dragões</HeaderLinkExtend>
          <HeaderLinkExtend to="/add">Adicionar um Dragão</HeaderLinkExtend>
        </HeaderExtendContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
