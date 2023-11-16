import pdf from "../assests/parents/pdf.png"
import rod1 from "../assests/parents/rod1.png"
import rod2 from "../assests/parents/rod2.png"
import rod3 from "../assests/parents/rod3.png"
import '../styles/Parents.css';

const Parents = () => {
    return (
    <div class="a1">
    <div class="a2">
        <div><img class="rod" src={rod1} alt=""/></div>
        <div class="a3"><img class="skachat2" src={pdf} alt=""/><a href="#">Открыть учебник</a></div>
    </div>
    <hr width="70%"/>
    <div class="a2">
        <div><img class="rod" src={rod2} alt=""/></div>
        <div class="a3"><img class="skachat2" src={pdf} alt=""/><a href="#">Открыть учебник</a></div>
    </div>
    <hr width="70%"/>
    <div class="a2">
        <div><img class="rod" src={rod3} alt=""/></div>
        <div class="a3"><img class="skachat2" src={pdf} alt=""/><a href="#">Открыть учебник</a></div>
    </div>
  </div>
  )
}

export default Parents