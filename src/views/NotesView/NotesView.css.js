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
  width: 80%;
  height: 10vh;
  text-align: center;
  border: 1px solid white;
`;
