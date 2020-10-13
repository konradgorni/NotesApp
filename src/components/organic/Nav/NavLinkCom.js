import React from 'react';

import { StyledIcon, StyledNav } from './Nav.css';

const NavLinkCom = ({ to, icon }) => {
  return (
    <StyledNav exact to={to} activeClassName="selected">
      <StyledIcon icon={icon} />
    </StyledNav>
  );
};

export default NavLinkCom;
