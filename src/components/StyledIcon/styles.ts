import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

interface IconProps {
  iconSize: number
}

export const Icon = styled(FontAwesomeIcon)<IconProps>`
  color: ${({ theme }) => theme.COLORS.RED_300};
  height: ${({ iconSize }) => iconSize + 'px'};
`;
