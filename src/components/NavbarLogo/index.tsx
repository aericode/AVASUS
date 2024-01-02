import logo from '../../assets/logo.png';
import logoSmall from '../../assets/logo-small.png';
import { LogoContainer, LogoImage, SmallLogoImage } from './styles';

interface Props {
  isSmallScreen: boolean
}

export function NavbarLogo({ isSmallScreen }: Props) {
  return (
    <LogoContainer href="#">
      {isSmallScreen ?
          <SmallLogoImage src={logoSmall} alt="Logo AVASUS" />
          :
          <LogoImage src={logo} alt="Logo AVASUS" /> 
      }
    </LogoContainer>
  );
};
