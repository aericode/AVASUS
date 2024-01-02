import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import { SandwichButton } from './styles';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface NavbarSandwichButtonProps {
  isSandwichMenuOpen: boolean,
  setIsSandwichMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NavbarSandwichButton({isSandwichMenuOpen, setIsSandwichMenuOpen}: NavbarSandwichButtonProps){
  return (
    <SandwichButton onClick={()=>setIsSandwichMenuOpen(!isSandwichMenuOpen)}>
      <FontAwesomeIcon icon={faBars} fontSize={25} />
    </SandwichButton>
  );
};
