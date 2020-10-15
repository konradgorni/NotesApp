import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: white;
  h2 {
    padding-top: 10vh;
    text-align: center;
    color: ${({ theme }) => theme.purple};
    letter-spacing: 2px;
    font-size: 3rem;
  }
  h2:first-letter {
    text-transform: uppercase;
    font-size: 3rem;
  }
  .data {
    position: absolute;
    top: 2%;
    right: 3%;
  }
  p.content {
    margin: 10vh 3vh 0 3vh;
    font-size: 1.8rem;
    line-height: 3rem;
    letter-spacing: 1px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  height: 5%;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
