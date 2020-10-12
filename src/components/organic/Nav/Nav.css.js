// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { device } from 'assets/breakpoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory, NavLink } from 'react-router-dom';

export const StyledWrapper = styled.div`
  width: 100%;
  height: 10vh;
  background-color: ${({ theme }) => theme.darkenpurple};
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 50px;
  color: white;
  transition: 1s ease-in-out;
  :hover {
    transform: rotate(360deg);
    color: gold;
  }
  ${({ active }) =>
    active &&
    css`
      color: gold;
    `}
`;
