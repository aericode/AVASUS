import styled from 'styled-components';

export const LoginButton = styled.button`
  padding: 10px 40px;
  background-color: #fff;
  color: #707070;
  border: 1px solid #707070;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 3px;

  &:hover {
    opacity: 0.8;
  }
`;

export const LogonButton = styled.button`
  padding: 10px 35px;
  background-color: ${({ theme }) => theme.COLORS.gray300};
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }
`;