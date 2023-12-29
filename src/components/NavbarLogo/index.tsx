import logo from '../../assets/logo.png';
import { LogoContainer } from './style';

export function NavbarLogo(){
    return (
        <LogoContainer href="#">
            <img src={logo} alt="Logo AVASUS" />
        </LogoContainer>
    );
};
