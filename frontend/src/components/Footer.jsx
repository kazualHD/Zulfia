import '../styles/Footer.css';
import telegram from '../assests/telega.png';

const Footer = () => {
    return (
        <footer>
        <div><p>Муниципальное автономное дошкольное образовательное учреждение Детский сад 50 городского округа город Уфа Республики Башкортостан</p></div>
        <div><p>Телефон детского сада: +7(347) 246-28-84</p></div>
        <div><p>Адрес: Республика Башкортостан, город Уфа улица Степана Кувыкина, 3/1</p></div>
        <div><p>E-mail детского сада: ufadetsad50@yandex.ru</p></div>
        <div><p>Мой E-mail: zulfiya.sultanova.78@mail.ru</p></div>
        <div><img className='telega' src={telegram} alt='teltegram' /><p>(ссылка на тг)</p></div>
    </footer>
    )
}

export default Footer;