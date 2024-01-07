import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

interface SearchContainerProps {
  isSmallScreen: boolean
}

export const SearchContainer = styled.div<SearchContainerProps>`
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_150};
  border-radius: 20px;
  height: 40px;

  margin: 0 10px;

  width: ${({ isSmallScreen }) => (isSmallScreen ? '65vw' : '20vw')};
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  width: 90%;
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  color: ${({ theme }) => theme.COLORS.GRAY_500};;
`;