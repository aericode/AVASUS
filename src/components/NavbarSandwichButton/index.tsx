import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import { SandwichButton } from './styles';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export function NavbarSandwichButton() {
    return (
        <SandwichButton>
            <FontAwesomeIcon icon={faBars} fontSize={25} />
        </SandwichButton>
    );
};
