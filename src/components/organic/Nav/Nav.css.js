import styled from 'styled-components';
import { device } from 'assets/breakpoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

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
`;
export const StyledIconSignOut = styled(FontAwesomeIcon)`
  color: white;
  font-size: 50px;
  transition: 1s ease-in-out;
  :hover {
    transform: rotate(360deg);
    color: gold;
  }
`;

export const StyledNav = styled(NavLink)`
  color: white;
  transition: 1s ease-in-out;

  &.selected {
    color: gold;
  }
  :hover {
    transform: rotate(360deg);
    color: gold;
  }
`;
