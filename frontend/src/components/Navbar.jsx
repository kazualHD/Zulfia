import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header>
      <div><p><Link to="/">Главная</Link></p></div>
      <div>
        <p><Link to="/about-me">Обо мне</Link></p>
        <ul>
          <Link to="/about-me"><li>Сведения</li></Link>
          <Link to="/im-teacher"><li>Я-воспитатель!</li></Link>
          <Link to="/results"><li>Мои достижения</li></Link>
          <Link to="/qualify"><li>Повышение квалификации</li></Link>
        </ul>
      </div>
      <div><p><Link to="/">Педагогический опыт</Link></p>
        <ul>
          <Link to="/children"><li>Ментальная арифметика</li></Link>
          <Link to="/umnyasha"><li>Умняша</li></Link>
          <Link to="/galereya"><li>Галерея</li></Link>
        </ul>
      </div>
      <div>
        <p><Link to="/">Педагогам</Link></p>
        <ul>
            <Link to="/baza"><li>Нормативно-правовая база</li></Link>
            <Link to="/teachers"><li>Пособия</li></Link>
            <Link to="/peds"><li>Полезные ссылки</li></Link>
        </ul>
        </div>
      <div>
        <p><Link to="/">Родителям</Link></p>
        <ul>
          <Link to="/pamyatka"><li>Консультации и памятки</li></Link>
          <Link to="/rods"><li>Полезные ссылки</li></Link>
          <Link to="/parents"><li>Методические пособия</li></Link>
          <Link to="/center"><li>Консультационный центр</li></Link>
        </ul>
      </div>
      <Link to="/children-games"><div><p>Детям</p></div></Link>
      <Link to="/svyaz"><div><p>Обратная связь</p></div></Link>
    </header>
  );
}

export default Navbar;
