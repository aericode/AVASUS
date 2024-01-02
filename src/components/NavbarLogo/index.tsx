import logo from '../../assets/logo.png';
import { LogoContainer, LogoImage } from './styles';

export function NavbarLogo() {
  return (
    <LogoContainer href="#">
      <LogoImage src={logo} alt="Logo AVASUS" />
    </LogoContainer>
  );
};
