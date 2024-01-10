import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const Wrapper = styled.div`
  width: fit-content;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
  width: fit-content;

`;

export const StyledText = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  display: inline;
`;

export const StyledGraphIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin-right: 10px;
`;