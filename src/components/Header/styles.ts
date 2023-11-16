import styled from 'styled-components';

export const HeaderContainer = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mksBlue};
  display: flex;
  height: 6rem;
  justify-content: space-between;
  padding: 0 5.5rem 0 4rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  min-height: 2rem;
  align-items: flex-end
`
export const LogoTitle = styled.span`
  padding: 0.4rem;
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;
`

export const LogoSubTitle = styled.span`
  padding: 0;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;
`