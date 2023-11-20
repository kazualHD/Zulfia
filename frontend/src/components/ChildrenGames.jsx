import o1 from '../assests/childrenGames/big-small/1.jpg'
import o2 from '../assests/childrenGames/krosvord/1.jpg'
import o3 from '../assests/childrenGames/krosvord/2.jpg'
import o4 from '../assests/childrenGames/krosvord/3.jpg'
import o5 from '../assests/childrenGames/krosvord/4.jpg'
import o6 from '../assests/childrenGames/labirint/labirint_01.jpg'
import o7 from '../assests/childrenGames/labirint/labirint_02.jpg'
import o8 from '../assests/childrenGames/labirint/labirint_03.jpg'
import o9 from '../assests/childrenGames/labirint/labirint_04.jpg'
import o10 from '../assests/childrenGames/pazlu-primer/1.jpg'
import o11 from '../assests/childrenGames/pazlu-primer/2.jpg'
import o12 from '../assests/childrenGames/pazlu-primer/3.jpg'
import o13 from '../assests/childrenGames/pazlu-primer/4.jpg'
import o14 from '../assests/childrenGames/strup/2.JPG'
import o15 from '../assests/childrenGames/strup/3.JPG'
import o16 from '../assests/childrenGames/shulte.jpg'
import dow1 from '../assests/zip/krossvord.zip'
import dow2 from '../assests/zip/Labirint.zip'
import dow3 from '../assests/zip/pazli.zip'
import dow4 from '../assests/zip/strup.zip'

import '../styles/ChildrenGames.css';

const ChildrenGames = () => {
    return (
        <div class="gg1">
            <h1>Большие и малые числа</h1>
            <img class="im1" src={o1} alt="" />
            <h1>Кросворды</h1><a href={dow1} download>скачать</a>
            <div class="im4">
                <img src={o2} alt="" />
                <img src={o3} alt="" />
            </div>
            <div class="im4">
                <img src={o4} alt="" />
                <img src={o5} alt="" />
            </div>
            <h1>Лабиринты</h1><a href={dow2} download>скачать</a>
            <div class="im4">
                <img src={o6} alt="" />
                <img src={o7} alt="" />
            </div>
            <div class="im4">
                <img src={o8} alt="" />
                <img src={o9} alt="" />
            </div>
            <h1>Пазлы-примеры</h1><a href={dow3} download>скачать</a>
            <div class="im4">
                <img src={o10} alt="" />
                <img src={o11} alt="" />
            </div>
            <div class="im4">
                <img src={o12} alt="" />
                <img src={o13} alt="" />
            </div>
            <h1>Струп-тест</h1><a href={dow4} download>скачать</a>
            <div class="im4">
                <img src={o14} alt="" />
                <img src={o15} alt="" />
            </div>
            <img class="im2" src={o16} alt="" />
        </div>
    )
}
export default ChildrenGames;