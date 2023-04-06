import { NavLink } from 'react-router-dom';
import clsx from "clsx";
import s from "./MainNav.module.scss";


const getACtiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);

const MainNav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink  className={getACtiveClass} to="/" end>
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={getACtiveClass} to="/movies" end>
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default MainNav