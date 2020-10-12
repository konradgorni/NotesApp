import React from 'react';
import HeaderText from 'components/atoms/Title';
import Button from 'components/atoms/Button';
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
