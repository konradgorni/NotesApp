import React from 'react';
import { StyledWrapper, StyledContainer, StyledNote } from './BoardView.css';
import { HeaderWrapper } from 'components/atoms/HeaderWrapper';

const BoardView = () => {
  return (
    <StyledWrapper>
      <HeaderWrapper>Hi Konrad</HeaderWrapper>
      <StyledContainer>
        <div>
          <h2>Income events</h2>
          <StyledNote />
          <StyledNote />
          <StyledNote />
          <StyledNote />
        </div>
        <div>
          <h2>Important things</h2>
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default BoardView;
