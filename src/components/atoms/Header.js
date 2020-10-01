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
    font-size: 7rem;
  }
  @media ${device.laptopL} {
    font-size: 8rem;
  }
`;

export default HeaderText;

/* background-color: ${({ theme }) => theme.primary}; */

//   ${({ secondary }) =>
//     secondary &&
//     css`
//       background-color: ${({ color }) => color || '#e6e6e6;'};
//       width: 105px;
//       height: 30px;
//       font-size: 10px;
//     `}
