import '../styles/AboutMe.css';
import icon1 from '../assests/aboutMe/ic1.png';
import icon2 from '../assests/aboutMe/ic2.png';
import icon3 from '../assests/aboutMe/ic3.png';
import icon4 from '../assests/aboutMe/ic4.png';
import icon5 from '../assests/aboutMe/ic5.png';
import icon6 from '../assests/aboutMe/ic6.png';
import me from '../assests/aboutMe/ya.png';

const AboutMe = () => {
    return (
        <>
        <div class="wow">
        <div class="r1"><h1>Обо мне</h1></div>
        <div class="r2"><img class="icon" src={icon1} alt=""/><p><b>Год рождения: </b>12.10.1978г</p></div>
        <div class="r3"><img class="icon" src={icon2} alt=""/><p><b>Место работы: </b>Муниципальное автономное дошкольное образовательное учреждение Детский сад №50 городского округа город Уфа Республики Башкортостан</p></div>
        <div class="r4"><img class="icon" src={icon3} alt=""/><p><b>Образование: </b>Башкирский государственный университет, 2003г. Уфимский педагогический колледж №1, 1997г.</p></div>
        <div class="r5"><img class="icon" src={icon4} alt=""/><p><b/>Общий стаж: <b/>23 года<br/><b/>Педагогический стаж работы: <b/>19 лет</p></div>
        <div class="r6"><img class="icon" src={icon5} alt=""/><p><b>Квалификационная категория: </b>высшая</p></div>
        <div class="r7"><img class="icon" src={icon6} alt=""/><p><b>Увлечения и хобби: </b>чтение стихов, книг, пение</p></div>
        <div class="r8"><img class="ya" src={me} alt=""/></div>
    </div>
    </>
    )
}

export default AboutMe;