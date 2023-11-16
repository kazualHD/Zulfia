import pdf from "../assests/teachers/pdf.png"
import ped1 from "../assests/teachers/ped1.png"
import ped2 from "../assests/teachers/ped2.png"
import ped3 from "../assests/teachers/ped3.png"
import '../styles/Teachers.css';

const Parents = () => {
    return (
        <div class="t1">
        <div class="t2">
            <div><img class="ucheb" src={ped1} alt=""/></div>
            <div class="t3"><img class="skachat" src={pdf} alt=""/><a href="#">Открыть учебник</a></div>
        </div>
        <hr width="70%"/>
        <div class="t2">
            <div><img class="ucheb" src={ped2} alt=""/></div>
            <div class="t3"><img class="skachat" src={pdf} alt=""/><a href="#">Открыть учебник</a></div>
        </div>
        <hr width="70%"/>
        <div class="t2">
            <div><img class="ucheb" src={ped3} alt=""/></div>
            <div class="t3"><img class="skachat" src={pdf} alt=""/><a href="#">Открыть учебник</a></div>
        </div>
      </div>
  )
}

export default Parents