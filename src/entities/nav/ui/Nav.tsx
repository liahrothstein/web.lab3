import "./Nav.scss";

import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <h2>Панель навигации</h2>
      <ul>
        <li>
          <Link to="/web.lab3/">Главная</Link>
        </li>
        <li>
          <Link to="/web.lab3/about">О Авторе</Link>
        </li>
        <li>
          <Link to="/web.lab3/form">Форма ввода</Link>
        </li>
      </ul>
    </nav>
  );
}
