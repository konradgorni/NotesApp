import styled, { css } from 'styled-components';
import { device } from 'assets/breakpoints';

const HeaderText = styled.h1`
  color: ${({ theme }) => theme.purple};
  font-size: 4rem;
  text-align: center;
  padding: 5% 0;
  letter-spacing: 1px;
  @media ${device.mobileX} {
    font-size: 5rem;
  }
  @media ${device.tablet} {
    font-size: 6rem;
  }
  @media ${device.laptopL} {
    font-size: 7rem;
  }

  ${({ paddingless }) =>
    paddingless &&
    css`
      padding: 0;
      height: 100%;
    `}
`;

export default HeaderText;
