import HeaderCartButton from "../HeaderCartButton";
// import styled from 'styled-components';
import { HeaderContainer } from "./styles";


export default function Header() {
  return (
    <HeaderContainer>
      <div>
        <span>MKS</span> 
        <span>Sistemas</span>
      </div>
      <HeaderCartButton/>
    </HeaderContainer>
  )
}
