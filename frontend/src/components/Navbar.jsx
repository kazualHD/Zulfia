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
<<<<<<< HEAD
            <li><Link to="/baza">Нормативно-правовая база</Link></li>
            <li><Link to="/teachers">Пособия</Link></li>
        </ul>s
=======
            <Link to="/baza"><li>Нормативно-правовая база</li></Link>
            <Link to="/teachers"><li>Пособия</li></Link>
        </ul>
>>>>>>> 2f99156c1ad9983336229e13d2139404d837c7f7
        </div>
      <div>
        <p><Link to="/">Родителям</Link></p>
        <ul>
          <Link to="/pamyatka"><li>Консультации и памятки</li></Link>
          <Link to="/parents"><li>Методические пособия</li></Link>
          <Link to="/center"><li>Консультационный центр</li></Link>
        </ul>
      </div>
<<<<<<< HEAD
      <div><p><Link to="/children-games">Детям</Link></p></div>
      <div><p><Link to="/">Обо мне</Link></p></div>
=======
      <Link to="/"><div><p>Детям</p></div></Link>
      <Link to="/svyaz"><div><p>Обратная связь</p></div></Link>
>>>>>>> 2f99156c1ad9983336229e13d2139404d837c7f7
    </header>
  );
}

export default Navbar;
