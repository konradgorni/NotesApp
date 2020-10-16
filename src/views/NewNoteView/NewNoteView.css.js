import styled from 'styled-components';

export const StyledWrapper = styled.div`
  height: 80vh;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p.checkbox{
    color:white;
    font-size:2rem;
  }
  .test{
    display:flex;
    width:90%;
    justify-content:center;
    text-align:center;
p{
  padding-left:5%;
}
  }
`;

