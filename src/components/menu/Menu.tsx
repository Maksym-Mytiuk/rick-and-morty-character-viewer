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
          <NavLink to={ROUTES.EPISODES}>Episodes</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.LOCATIONS}>Locations</NavLink>
        </li>
      </NavigationList>
    </nav>
  );
}
