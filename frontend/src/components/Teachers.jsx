import pdf from "../assests/teachers/pdf.png"
import modelI from "../assests/teachers/model.png"
import page37 from "../assests/teachers/page37.png"
import modelP from "../assests/teachers/pdf/model.pdf"
import page37P from "../assests/teachers/pdf/page37.pdf"
import '../styles/Teachers.css';

const Parents = () => {
    const openPdf = (src) => {
        window.open(src, '_blank');
    };
    return (
        <div class="t1">
        <div class="t2">
            <div><img class="ucheb" src={modelI} alt=""/></div>
            <div class="t3"><img class="skachat" src={pdf} alt=""/> <div className="pdf" onClick={()=> openPdf(modelP)}>Открыть учебник</div></div>
        </div>
        <hr width="70%"/>
        <div class="t2">
            <div><img class="ucheb" src={page37} alt=""/></div>
            <div class="t3"><img class="skachat" src={pdf} alt=""/><div className="pdf" onClick={()=> openPdf(page37P)}>Открыть учебник</div></div>
        </div>
      </div>
  )
}

export default Parents