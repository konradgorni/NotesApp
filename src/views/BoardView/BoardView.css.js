import styled from 'styled-components';
import { device } from 'assets/breakpoints';

export const StyledWrapper = styled.div`
  width: 100%;
  min-height: 110vh;
  background-color: ${({ theme }) => theme.background};
`;

export const StyledContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  text-align: center;
  margin-bottom:5vh;
  h2 {
    color: white;
    font-size:2.5rem;
      @media ${device.mobileX} {
    font-size: 3rem;
  
  }
  }

  .wrapper {
    width: 100%;
    min-height: 40vh;
    padding: 5%;
  }
`;

export const StyledNote = styled.div`
height:30vh;
width:80%;
background-color: gold;
margin:5% auto;
display:flex;
flex-direction:column;
justify-content:center;
border-radius:5px;
    cursor:pointer;
    @media ${device.laptop} {
    width:60%;

  }
      @media ${device.laptopL} {
    width:50%;


  }

h2{
  color:purple;
  text-transform:uppercase;
  margin-bottom:5vh;
letter-spacing:1px;
font-size:2rem;
  @media ${device.mobileX} {
    font-size: 3rem;
  }
  
}
p{
  color:white;
    @media ${device.mobileX} {
    font-size: 2rem;

  }
}

`;
