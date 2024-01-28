import '../styles/Peds.css';
import dd1 from '../assests/imTeacher/1.png'
import dd2 from '../assests/imTeacher/2.jpg'
import dd3 from '../assests/imTeacher/3.svg'
import dd4 from '../assests/imTeacher/4.jpg'
import dd5 from '../assests/imTeacher/5.png'

const Peds = () => {
    return (
        <div class="contik">
         <div className='sisilka'>
            <img src={dd1} alt="" />
            <a href="http://www.edu.ru/">Сайт российского образования</a>
         </div>
         <div className='sisilka'>
            <img src={dd2} alt="" />
            <a href="https://irorb.ru/#">Институт развития образования Республики Башкортостан</a>
         </div>
         <div className='sisilka'>
            <img src={dd3} alt="" />
            <a href="https://nimc-ufa.ru/">«Научно-информационно-методический центр» Республики Башкортостан</a>
         </div>
         <div className='sisilka'>
            <img src={dd4} alt="" />
            <a href="https://xn--90arfhfch6b.xn--p1ai/attestatsiya-rukovoditeley-oo/attestatsiya-pedagogov-oo/">Аттестация педагогов</a>
         </div>
         <div className='sisilka'>
            <img src={dd5} alt="" />
            <a href="https://sdo-journal.ru/">Журнал “Современное дошкольное образование”</a>
         </div>
        </div>
    )
}
export default Peds;