import '../styles/Rods.css';
import ff1 from '../assests/parents/1.jpg';
import ff2 from '../assests/parents/2.jpg';
import ff3 from '../assests/parents/3.jpg';
import ff4 from '../assests/parents/4.jpg';
import ff5 from '../assests/parents/5.jpg';

const Rods = () => {
    return (
        <div class="contik">
            <div className="ssilka">
                <img src={ff1} alt="" />
                <div className='ssilka2'>
                    <p>Детский портал «СОЛНЫШКО», кладезь для родителей</p>
                    <a href="https://solnet.ee/games/g1_01">https://solnet.ee/games/g1_01</a>
                </div>
            </div>
            <div className="ssilka">
                <img src={ff2} alt="" />
                <div className='ssilka2'>
                    <p>Детский портал «Почемучка», развивающие занятия</p>
                    <a href="https://pochemu4ka.ru/index/0-15">https://pochemu4ka.ru/index/0-15</a>
                </div>
            </div>
            <div className="ssilka">
                <img src={ff3} alt="" />
                <div className='ssilka2'>
                    <p>Развитие и обучение детей в игровой форме с Айкьюшей</p>
                    <a href="https://iqsha.ru/">https://iqsha.ru/</a>
                </div>
            </div>
            <div className="ssilka">
                <img src={ff4} alt="" />
                <div className='ssilka2'>
                    <p>«Лукошко сказок», сказки народов мира</p>
                    <a href="https://lukoshko.net/content/videoknigi-dlya-detey.htm">https://lukoshko.net/content/videoknigi-dlya-detey.htm</a>
                </div>
            </div>
            <div className="ssilka">
                <img src={ff5} alt="" />
                <div className='ssilka2'>
                    <p>Развивающие игры «Играемся»</p>
                    <a href="https://www.igraemsa.ru/">https://www.igraemsa.ru/</a>
                </div>
            </div>
        </div>
    )
}
export default Rods;