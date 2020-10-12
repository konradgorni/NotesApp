import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

export const StyledContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  text-align: center;
  h2 {
    color: white;
  }

  div {
    width: 100%;
    min-height: 40vh;
    padding: 5%;
  }
`;

export const StyledNote = styled.div`
  width: 70%;
  height: 30%;
  background-color: #fff;
  border: 1px solid black;
  margin-top: 5%;
`;
