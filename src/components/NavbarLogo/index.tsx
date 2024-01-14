import logo from '../../assets/logo.png';
import logoSmall from '../../assets/logo-small.png';
import { LogoContainer, LogoImage, SmallLogoImage } from './styles';
import { useScreen } from '../../contexts/ScreenSizeContext';


export function NavbarLogo() {
  const { isSmallScreen } = useScreen();
  return (
    <LogoContainer href="/">
      {isSmallScreen ?
        <SmallLogoImage src={logoSmall} alt="Logo AVASUS" />
        :
        <LogoImage src={logo} alt="Logo AVASUS" />
      }
    </LogoContainer>
  );
};
