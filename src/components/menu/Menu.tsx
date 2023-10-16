import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/App';
import { NavigationList } from './Menu.styled';

export default function Menu() {
  return (
    <nav>
      <NavigationList>
        <li>
          <NavLink to={ROUTES.CHARACTERS}>Characters</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.EPISODES}>Locations</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.LOCATIONS}>Episodes</NavLink>
        </li>
      </NavigationList>
    </nav>
  );
}
