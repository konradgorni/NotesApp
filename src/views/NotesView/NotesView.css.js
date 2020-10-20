import styled from 'styled-components';
import { device } from 'assets/breakpoints';

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
  overflow-x:hidden;
  margin-bottom:10vh;
`;

export const StyledNote = styled.div`
height:15vh;
line-height:15vh;
width:70%;
background-color: gold;
border-radius:5px;
margin:5vh 0;
text-align:center;
color:white;
font-size:2rem;
text-transform:uppercase;
transition:1s;
  :hover {
    cursor: pointer;
    color: purple;
  }
  @media ${device.mobileX} {
    font-size: 3rem;
    margin: 4% 0;
  }
  @media ${device.laptop} {
    font-size: 4rem;
    margin: 3% 0;
    width:50%;
  }
    @media ${device.laptopL} {
    font-size: 4rem;
    margin: 3% 0;
    width:40%;
    height:20vh;
    line-height:20vh;
  }
`;
