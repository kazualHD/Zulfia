import '../styles/Baza.css';
import qwe1 from '../assests/aboutMe/1.jpg';
import qwe2 from '../assests/aboutMe/2.jpg';
import qwe3 from '../assests/aboutMe/3.jpg';
import qwe4 from '../assests/aboutMe/4.jpg';
import qwe5 from '../assests/aboutMe/5.jpg';

const Baza = () => {
    return (
        <div class="y">
        <div className="silka">
                <img src={qwe1} alt="" />
                <div className='silka2'>
                    <p>Конвенция о правах ребенка</p>
                    <a href="https://www.un.org/ru/documents/decl_conv/conventions/childcon.shtml">https://www.un.org/ru/documents/decl_conv/conventions/childcon.shtml</a>
                </div>
            </div>
            <div className="silka">
                <img src={qwe2} alt="" />
                <div className='silka2'>
                    <p>Федеральный закон Об Образовании в Российской Федерации № 273-ФЗ от 29.12.2012</p>
                    <a href="http://zakon-ob-obrazovanii.ru/">http://zakon-ob-obrazovanii.ru/</a>
                </div>
            </div>
            <div className="silka">
                <img src={qwe3} alt="" />
                <div className='silka2'>
                    <p>Приказ Минобрнауки России от 17.10.2013 N 1155 "Об утверждении федерального государственного образовательного стандарта дошкольного образования"</p>
                    <a href="https://madou-50.edu-rb.ru/docs/407093c55e.pdf">https://madou-50.edu-rb.ru/docs/407093c55e.pdf</a>
                </div>
            </div>
            <div className="silka">
                <img src={qwe4} alt="" />
                <div className='silka2'>
                    <p>Приказ Министерства просвещения Российской Федерации от 25.11.2022 № 1028 "Об утверждении федеральной образовательной программы дошкольного образования" (Зарегистрирован 28.12.2022 № 71847)</p>
                    <a href="http://publication.pravo.gov.ru/Document/View/0001202212280044?index=1">http://publication.pravo.gov.ru/Document/View/0001202212280044?index=1</a>
                </div>
            </div>
            <div className="silka">
                <img src={qwe5} alt="" />
                <div className='silka2'>
                    <p>Постановление Главного государственного санитарного врача Российской Федерации от 28.09.2020 № 28 "Об утверждении санитарных правил СП 2.4. 3648-20 "Санитарно-эпидемиологические требования к организациям воспитания и обучения, отдыха и оздоровления детей и молодежи"</p>
                    <a href="http://publication.pravo.gov.ru/Document/View/0001202012210122?index=48">http://publication.pravo.gov.ru/Document/View/0001202012210122?index=48</a>
                </div>
            </div>
        </div>
    )
}
export default Baza;