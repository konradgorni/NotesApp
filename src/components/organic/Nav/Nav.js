import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from 'data/firebase/firebase';
import { setAuth, setID } from 'data/slices/userInfoSlice';
import { useDispatch } from 'react-redux';
import { faHome, faStickyNote, faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import NavLinkCom from './NavLinkCom';
import { StyledWrapper, StyledIcon } from './Nav.css';

const Nav = () => {
  const dispatch = useDispatch();

  const singout = () => {
    dispatch(setAuth(false));
    dispatch(setID(''));
    auth.signOut();
  };
  return (
    <StyledWrapper>
      <NavLinkCom to="/authpagehome/boardview" icon={faHome} />
      <NavLinkCom to="/authpagehome/notesview" icon={faStickyNote} />
      <NavLinkCom to="/authpagehome/newnoteview" icon={faPlus} />
      <Link to="/" onClick={singout}>
        <StyledIcon icon={faSignOutAlt} />
      </Link>
    </StyledWrapper>
  );
};

export default Nav;
