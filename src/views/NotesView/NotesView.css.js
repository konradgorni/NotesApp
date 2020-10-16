import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

export const StyledContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
`;

export const StyledNote = styled.div`
  height: 15vh;
  text-align: center;
  font-size:4rem;
  color:white;
  transition:1s;
  :hover{
    cursor:pointer;
    color:gold;
  }  

`;
