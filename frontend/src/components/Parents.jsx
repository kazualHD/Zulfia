import pdf from "../assests/parents/pdf.png"
import rod1 from "../assests/parents/rod1.png"
import gamesI from "../assests/parents/games.png"
import neyroI from "../assests/parents/neyro.png"
import zan from "../assests/parents/zan.png"
import golo from "../assests/parents/100.png"
import '../styles/Parents.css';
import cards from '../assests/parents/pdf/cards.pdf';
import psysh from '../assests/parents/pdf/psyh.pdf';
import neyro from '../assests/parents/pdf/neyro.pdf'
import games from '../assests/parents/pdf/games.pdf'
import gimnastka from '../assests/parents/pdf/gimnastika.pdf';


const Parents = () => {
    
    const openPdf = (pdfUrl) => {
        // Откройте PDF в новой вкладке
        window.open(pdfUrl, '_blank');
    }

    return (
        <div class="a1">
            <div class="a2">
                <div><img class="rod" src={rod1} alt=""/></div>
                <div class="a3">
                    <img class="skachat2" src={pdf} alt=""/>
                    <div class="pdf" onClick={() => openPdf(gimnastka)}>Открыть учебник</div>
                </div>
            </div>
            <hr width="70%"/>
            <div class="a2">
                <div><img class="rod" src={gamesI} alt=""/></div>
                <div class="a3">
                    <img class="skachat2" src={pdf} alt=""/>
                    <div class="pdf" onClick={() => openPdf(games)}>Открыть учебник</div>
                </div>
            </div>
            <hr width="70%"/>
            <div class="a2">
                <div><img class="rod" src={neyroI} alt=""/></div>
                <div class="a3">
                    <img class="skachat2" src={pdf} alt=""/>
                    <div class="pdf" onClick={() => openPdf(neyro)}>Открыть учебник</div>
                </div>
            </div>
            <hr width="70%"/>
            <div class="a2">
                <div><img class="rod" src={zan} alt=""/></div>
                <div class="a3">
                    <img class="skachat2" src={pdf} alt=""/>
                    <div class="pdf" onClick={() => openPdf(psysh)}>Открыть учебник</div>
                </div>
            </div>
            <hr width="70%"/>
            <div class="a2">
                <div><img class="rod" src={golo} alt=""/></div>
                <div class="a3">
                    <img class="skachat2" src={pdf} alt=""/>
                    <div class="pdf" onClick={() => openPdf(cards)}>Открыть учебник</div>
                </div>
            </div>
        </div>
    );
}

export default Parents;
