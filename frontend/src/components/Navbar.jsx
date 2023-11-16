import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header>
      <div><p><Link to="/">Главная</Link></p></div>
      <div>
        <p><Link to="/about-me">Обо мне</Link></p>
        <ul>
          <li><Link to="/about-me">Сведения</Link></li>
          <li><Link to="/im-teacher">Я-воспитатель!</Link></li>
          <li><Link to="/results">Мои достижения</Link></li>
          <li><Link to="/my-publs">Мои публикации</Link></li>
          <li><Link to="/">Повышение квалификации</Link></li>
        </ul>
      </div>
      <div><p><Link to="/">Педагогический опыт</Link></p>
        <ul>
          <li><Link to="/">Ментальная арифметика</Link></li>
        </ul>
      </div>
      <div><p><Link to="/">Педагогам</Link></p></div>
      <div>
        <p><Link to="/parents">Родителям</Link></p>
        <ul>
          <li><Link to="/">Консультации и памятки</Link></li>
          <li><Link to="/">Консультационный центр</Link></li>
        </ul>
      </div>
      <div><p><Link to="/">Детям</Link></p></div>
    </header>
  );
}

export default Navbar;
