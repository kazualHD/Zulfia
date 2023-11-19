import a1 from "../assests/pamyatka/1a.jpg"
import a2 from "../assests/pamyatka/2a.jpg"
import a3 from "../assests/pamyatka/3a.jpg"
import a4 from "../assests/pamyatka/4a.jpg"
import '../styles/Pamyatka.css';
import pdf1 from "../assests/pamyatka/pdf/1.pdf"
import pdf2 from "../assests/pamyatka/pdf/2.pdf"

const Pamyatka = () => {
    const openPdf = (pdf) => {window.open(pdf, "_blank")}
    return (
        <div class="z">
        <div class="pdf228" onClick={()=> openPdf(pdf1)}>Консультация на тему: «Ментальная арифметика. Включаем оба полушария»</div>
        <div class="pdf228" onClick={()=> openPdf(pdf2)}>Консультация для родителей «Ментальная арифметика»</div>
        <div class="z1">
            <img src={a1} alt=""/>
            <img src={a2} alt=""/>
        </div>
        <div class="z2">
            <img src={a3} alt=""/>
            <img src={a4} alt=""/>
        </div>
    </div>
    )
}
export default Pamyatka;