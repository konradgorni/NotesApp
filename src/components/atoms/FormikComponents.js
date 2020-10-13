import { Field, Form } from 'formik';
import styled from 'styled-components';
import { device } from 'assets/breakpoints';
import DatePicker from 'react-datepicker';

export const StyledField = styled(Field)`
  background-color: ${({ theme }) => theme.purple};
  color: white;
  width: 200px;
  height: 47px;
  margin: 20px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.purple};
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 2.5rem;
  transition: 0.5s ease-in-out;

  :hover {
    cursor: pointer;
    border: 2px solid;
  }
  ::placeholder {
    font-size: 18px;
    color: ${({ theme }) => theme.gray};
  }

  @media ${device.mobileX} {
    width: 250px;
    height: 55px;
    font-size: 2.8rem;
    ::placeholder {
      font-size: 1.9rem;
      color: ${({ theme }) => theme.gray};
    }
  }

  @media ${device.tablet} {
    width: 260px;
    height: 58px;
    font-size: 3rem;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  max-width: 250px;
  margin: 0 auto;
  font-size: 18px;
  @media ${device.tablet} {
    max-width: 280px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* notes styled components */

export const StyledFieldContent = styled(Field)`
  background-color: ${({ theme }) => theme.purple};
  color: white;
  width: 250px;
  height: 200px;
  margin: 20px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.purple};
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 2.5rem;
  transition: 0.5s ease-in-out;
  resize: none;

  :hover {
    cursor: pointer;
    border: 2px solid;
  }
  ::placeholder {
    font-size: 18px;
    color: ${({ theme }) => theme.gray};
  }

  @media ${device.mobileX} {
    width: 250px;
    height: 55px;
    font-size: 2.8rem;
    ::placeholder {
      font-size: 1.9rem;
      color: ${({ theme }) => theme.gray};
    }
  }

  @media ${device.tablet} {
    width: 260px;
    height: 58px;
    font-size: 3rem;
  }
`;

export const StyledFieldNote = styled(Field)`
  background-color: ${({ theme }) => theme.purple};
  color: white;
  width: 250px;
  height: 47px;
  margin: 20px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.purple};
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 2.5rem;
  transition: 0.5s ease-in-out;

  :hover {
    cursor: pointer;
    border: 2px solid;
  }
  ::placeholder {
    font-size: 18px;
    color: ${({ theme }) => theme.gray};
  }

  @media ${device.mobileX} {
    width: 250px;
    height: 55px;
    font-size: 2.8rem;
    ::placeholder {
      font-size: 1.9rem;
      color: ${({ theme }) => theme.gray};
    }
  }

  @media ${device.tablet} {
    width: 260px;
    height: 58px;
    font-size: 3rem;
  }
`;

export const StyledPicker = styled(DatePicker)`
  width: 250px;
  height: 47px;
  text-align: center;
  background-color: ${({ theme }) => theme.purple};
  color: white;
  margin: 20px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.purple};
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 2.5rem;
`;
