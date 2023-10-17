import { Link } from 'react-router-dom';
import { Logo, Header as AppHeader } from './Header.styled';
import Menu from '@/components/menu/Menu';
import logo from '@/assets/images/logo.png';

export default function Header() {
  return (
    <AppHeader>
      <Link to={'#'}>
        <Logo src={logo} alt="logo" />
      </Link>

      <Menu />
    </AppHeader>
  );
}
