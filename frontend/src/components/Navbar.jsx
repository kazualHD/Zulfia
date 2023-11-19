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
          <Link to="/my-publs"><li>Мои публикации</li></Link>
          <Link to="/qualify"><li>Повышение квалификации</li></Link>
        </ul>
      </div>
      <div><p><Link to="/">Педагогический опыт</Link></p>
        <ul>
          <Link to="/children"><li>Ментальная арифметика</li></Link>
        </ul>
      </div>
      <div>
        <p><Link to="/">Педагогам</Link></p>
        <ul>
            <Link to="/baza"><li>Нормативно-правовая база</li></Link>
            <Link to="/teachers"><li>Пособия</li></Link>
        </ul>
        </div>
      <div>
        <p><Link to="/">Родителям</Link></p>
        <ul>
          <Link to="/pamyatka"><li>Консультации и памятки</li></Link>
          <Link to="/parents"><li>Методические пособия</li></Link>
          <Link to="/center"><li>Консультационный центр</li></Link>
        </ul>
      </div>
      <div><p><Link to="/">Детям</Link></p></div>
      <div><p><Link to="/">Обратная связь</Link></p></div>
    </header>
  );
}

export default Navbar;
