import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: 80vh;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

