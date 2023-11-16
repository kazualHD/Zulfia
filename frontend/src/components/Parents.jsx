import pdf from "../assests/parents/pdf.png"
import rod1 from "../assests/parents/rod1.png"
import rod2 from "../assests/parents/rod2.png"
import rod3 from "../assests/parents/rod3.png"
import '../styles/Parents.css';
import gimnastka from '../assests/parents/pdf/gimnastika.pdf';
import skorochet from '../assests/parents/pdf/skorochet.pdf';
import mental from '../assests/parents/pdf/mental.pdf';

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
                    <div onClick={() => openPdf(gimnastka)}>Открыть учебник</div>
                </div>
            </div>
            <hr width="70%"/>
            <div class="a2">
                <div><img class="rod" src={rod2} alt=""/></div>
                <div class="a3">
                    <img class="skachat2" src={pdf} alt=""/>
                    <div onClick={() => openPdf(mental)}>Открыть учебник</div>
                </div>
            </div>
            <hr width="70%"/>
            <div class="a2">
                <div><img class="rod" src={rod3} alt=""/></div>
                <div class="a3">
                    <img class="skachat2" src={pdf} alt=""/>
                    <div onClick={() => openPdf(skorochet)}>Открыть учебник</div>
                </div>
            </div>
        </div>
    );
}

export default Parents;
