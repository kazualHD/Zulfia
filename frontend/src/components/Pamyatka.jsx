import a1 from "../assests/pamyatka/1a.jpg"
import a2 from "../assests/pamyatka/2a.jpg"
import a3 from "../assests/pamyatka/3a.jpg"
import a4 from "../assests/pamyatka/4a.jpg"
import '../styles/Pamyatka.css';
import aa1 from "../assests/pamyatka/1.jpg"
import aa2 from "../assests/pamyatka/2.jpeg"
import aa3 from "../assests/pamyatka/3.jpg"
import aa4 from "../assests/pamyatka/4.jpg"
import aa5 from "../assests/pamyatka/5.jpg"
import aa6 from "../assests/pamyatka/6.jpg"

const Pamyatka = () => {
    return (
        <div class="z">
        <div class="z1">
            <img src={a1} alt=""/>
            <img src={a2} alt=""/>
        </div>
        <div class="z2">
            <img src={a3} alt=""/>
            <img src={a4} alt=""/>
        </div>
        <div className="z2">
            <img src={aa1} alt="" />
            <img src={aa2} alt="" />
        </div>
        <div className="z2">
            <img src={aa3} alt="" />
            <div className="z3">
                <img src={aa4} alt="" />
                <img src={aa5} alt="" />
            </div>
        </div>
        <div className="z4">
        <img src={aa6} alt="" />
        </div>
    </div>
    )
}
export default Pamyatka;