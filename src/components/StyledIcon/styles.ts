import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.COLORS.RED_300};
  height: 24px; /* Set the height to 24 pixels */
`;
