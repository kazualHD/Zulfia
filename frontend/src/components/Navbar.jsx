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
          <li><Link to="/qualify">Повышение квалификации</Link></li>
        </ul>
      </div>
      <div><p><Link to="/">Педагогический опыт</Link></p>
        <ul>
          <li><Link to="/children">Ментальная арифметика</Link></li>
        </ul>
      </div>
      <div>
        <p><Link to="/">Педагогам</Link></p>
        <ul>
            <li><Link to="/baza">Нормативно-правовая база</Link></li>
            <li><Link to="/teachers">Пособия</Link></li>
        </ul>
        </div>
      <div>
        <p><Link to="/">Родителям</Link></p>
        <ul>
          <li><Link to="/pamyatka">Консультации и памятки</Link></li>
          <li><Link to="/parents">Методические пособия</Link></li>
          <Link to="/center"><li>Консультационный центр</li></Link>
        </ul>
      </div>
      <div><p><Link to="/">Детям</Link></p></div>
      <div><p><Link to="/">Обратная связь</Link></p></div>
    </header>
  );
}

export default Navbar;
