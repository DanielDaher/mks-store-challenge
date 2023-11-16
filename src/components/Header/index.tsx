import HeaderCartButton from "../HeaderCartButton";
// import styled from 'styled-components';
import { HeaderContainer, LogoContainer, LogoSubTitle, LogoTitle } from "./styles";


export default function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoTitle>MKS</LogoTitle> 
        <LogoSubTitle>Sistemas</LogoSubTitle>
      </LogoContainer>
      <HeaderCartButton/>
    </HeaderContainer>
  )
}