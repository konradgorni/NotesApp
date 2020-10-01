import React from 'react';
import { device } from 'assets/breakpoints';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const commonStyle = css`
  background-color: ${({ theme }) => theme.purple};
  color: white;
  width: 200px;
  height: 47px;
  margin: 20px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.purple};
  font-family: 'Montserrat';
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.5rem;
  transition: 0.5s ease-in-out;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    border: 2px solid;
  }

  @media ${device.mobileX} {
    width: 250px;
    height: 55px;
    font-size: 2.8rem;
  }

  @media ${device.tablet} {
    width: 260px;
    height: 58px;
    font-size: 3rem;
  }
`;

const StyledLink = styled(Link)`
  ${commonStyle}
`;

const StyledButton = styled.button`
  ${commonStyle}
`;

const Button = ({ btn, name, path }) => {
  return btn ? (
    <StyledButton type="Submit">{name}</StyledButton>
  ) : (
    <StyledLink to={path}>{name}</StyledLink>
  );
};

export default Button;
