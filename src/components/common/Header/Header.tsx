import { Logo, Header as AppHeader } from './Header.styled';
import Menu from '@/components/menu/Menu';
import logo from '@/assets/images/logo.png';

export default function Header() {
  return (
    <AppHeader>
      <a href="#">
        <Logo src={logo} alt="logo" />
      </a>

      <Menu />
    </AppHeader>
  );
}
