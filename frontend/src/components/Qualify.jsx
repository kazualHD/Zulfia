import q001 from "../assests/qualify/001.jpg"
import q002 from "../assests/qualify/002.jpg"
import q003 from "../assests/qualify/003.jpg"
import q004 from "../assests/qualify/004.png"
import q005 from "../assests/qualify/005.jpg"
import '../styles/Qualify.css';

const Qualify = () => {
    return (
        <div class="p1">
            <div className="p3"><img src={q005} alt=""/></div>
        <div class="p2"><img src={q001} alt=""/>
        <img src={q002} alt=""/></div>
        <div class="p2"><img src={q003} alt=""/>
        <img src={q004} alt=""/></div>
    </div>
    )
}
export default Qualify;