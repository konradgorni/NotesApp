import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { StyledIcon } from './Nav.css';

const NavLinkCom = ({ to, icon }) => {
  const [active, setActive] = useState(false);
  return (
    <NavLink
      isActive={(match) => {
        if (!match) {
          return null;
        }

        setActive(true);
      }}
      to={to}
    >
      {active ? <StyledIcon active={active} icon={icon} /> : <StyledIcon icon={icon} />}
    </NavLink>
  );
};

export default NavLinkCom;
