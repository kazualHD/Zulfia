import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes.js';
import AboutMePage from './pages/AboutMePage';
import ImteacherPage from './pages/ImTeacherPage';
import MainPage from './pages/MainPage';
import MyPublPage from './pages/MyPublPage';
import MyReachmentPage from './pages/MyReacmentPage';
import ParentsPage from './pages/ParentsPage';
import TeachersPage from './pages/TeachersPage';
import ChildrenPage from './pages/ChildrenPage.jsx';
import QualifyPage from './pages/QualifyPage.jsx';
import BazaPage from './pages/BazaPage.jsx';
import PamyatkaPage from './pages/PamyatkaPage.jsx';
import CenterPage from './pages/CenterPage.jsx';
<<<<<<< HEAD
import ChildrenGames from './components/ChildrenGames.jsx';
=======
import SvyazPage from './pages/SvyazPage.jsx';
>>>>>>> 2f99156c1ad9983336229e13d2139404d837c7f7

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.rootPage()} element={<MainPage />} />
        <Route path={routes.aboutMePage()} element={<AboutMePage />} />
        <Route path={routes.imTeacherPage()} element={<ImteacherPage />} />
        <Route path={routes.myPublsPage()} element={<MyPublPage />} />
        <Route path={routes.resultsPage()} element={<MyReachmentPage />} />
        <Route path={routes.parentsPage()} element={<ParentsPage />} />
        <Route path={routes.teachersPage()} element={<TeachersPage />} />
        <Route path={routes.childrenPage()} element={<ChildrenPage />} />
        <Route path={routes.qualifyPage()} element={<QualifyPage />} />
        <Route path={routes.bazaPage()} element={<BazaPage />} />
        <Route path={routes.pamyatkaPage()} element={<PamyatkaPage />} />
        <Route path={routes.centerPage()} element={<CenterPage />} />
<<<<<<< HEAD
        <Route path={routes.childrenGamesPage()} element={<ChildrenGames />} />
=======
        <Route path={routes.svyazPage()} element={<SvyazPage />} />
>>>>>>> 2f99156c1ad9983336229e13d2139404d837c7f7
      </Routes>
    </BrowserRouter>
  );
}

export default App;
