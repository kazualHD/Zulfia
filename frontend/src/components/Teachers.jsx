import pdf from "../assests/teachers/pdf.png"
import ped1 from "../assests/teachers/ped1.png"
import ped2 from "../assests/teachers/ped2.png"
import ped3 from "../assests/teachers/ped3.png"
import book1 from '../assests/teachers/pdf/book1.pdf'
import book2 from '../assests/teachers/pdf/book2.pdf'
import book3 from '../assests/teachers/pdf/book3.pdf'
import '../styles/Teachers.css';

const Parents = () => {
    const openPdf = (src) => {
        window.open(src, '_blank');
    };
    return (
        <div class="t1">
        <div class="t2">
            <div><img class="ucheb" src={ped1} alt=""/></div>
            <div class="t3"><img class="skachat" src={pdf} alt=""/> <div className="pdf" onClick={()=> openPdf(book1)}>Открыть учебник</div></div>
        </div>
        <hr width="70%"/>
        <div class="t2">
            <div><img class="ucheb" src={ped2} alt=""/></div>
            <div class="t3"><img class="skachat" src={pdf} alt=""/><div className="pdf" onClick={()=> openPdf(book2)}>Открыть учебник</div></div>
        </div>
        <hr width="70%"/>
        <div class="t2">
            <div><img class="ucheb" src={ped3} alt=""/></div>
            <div class="t3"><img class="skachat" src={pdf} alt=""/><div className="pdf" onClick={()=> openPdf(book3)}>Открыть учебник</div></div>
        </div>
      </div>
  )
}

export default Parents