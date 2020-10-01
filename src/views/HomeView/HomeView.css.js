import styled from 'styled-components';
import spinerimg from 'assets/images/HomeLoader/img_fullhd.jpg';

export const SpinerWrapper = styled.div`
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  background-image: url(${spinerimg});
  background-size: cover;
  background-position: center center;
`;

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; ;
`;
