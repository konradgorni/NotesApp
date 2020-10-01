import React from 'react';
import HeaderText from 'components/atoms/Header.js';
import Button from 'components/atoms/Button.js';
import { StyledWrapper } from './HomeView.css';

const HomeView = () => {
  return (
    <StyledWrapper>
      <HeaderText>NotesApp</HeaderText>
      <Button name="Login" path="/login" />
      <Button name="Register" path="/register" />
    </StyledWrapper>
  );
};

export default HomeView;
