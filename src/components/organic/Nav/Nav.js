import React from 'react';
import { useHistory, NavLink, Link } from 'react-router-dom';
import { auth } from 'data/firebase/firebase';
import { setAuth, setID } from 'data/slices/userInfoSlice';
import { useDispatch } from 'react-redux';
import { StyledWrapper, StyledIcon } from './Nav.css';
import NavLinkCom from './NavLinkCom';
import {
  faHome,
  faStickyNote,
  faUsersCog,
  faPlus,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const singout = () => {
    dispatch(setAuth(false));
    dispatch(setID(''));
    auth.signOut();
    return history.push('/');
  };
  return (
    <StyledWrapper>
      <NavLinkCom to="/authpagehome/boardview" icon={faHome} />
      <NavLinkCom to="/authpagehome/notesview" icon={faStickyNote} />
      <NavLinkCom to="/authpagehome/newnoteview" icon={faPlus} />
      <Link onClick={singout}>
        <StyledIcon icon={faSignOutAlt} />
      </Link>
    </StyledWrapper>
  );
};

export default Nav;
