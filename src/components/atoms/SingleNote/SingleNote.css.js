import styled from 'styled-components';
import { device } from 'assets/breakpoints';

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
          @media ${device.laptop} {
    font-size: 4rem;
 
  }
  }
  h2:first-letter {
    text-transform: uppercase;
    font-size: 3rem;
  }
  .data {
    position: absolute;
    top: 4%;
    right: 5%;
    color:white;
          @media ${device.laptop} {
    font-size: 2rem;
 
  }
  }
  p.content {
    margin: 10vh 3vh 0 3vh;
    font-size: 1.8rem;
    line-height: 3rem;
    letter-spacing: 1px;
    text-align:center;
    min-height:50vh;
      @media ${device.laptop} {
    font-size: 2.7rem;
 
  }
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
