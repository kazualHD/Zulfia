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
import SvyazPage from './pages/SvyazPage.jsx';
import ChildrenGamesPage from './pages/ChildrenGamesPage.jsx';
import UmnyashaPage from './pages/UmnyashaPage.jsx';
import GalereyaPage from './pages/GalereyaPage.jsx';

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
        <Route path={routes.svyazPage()} element={<SvyazPage />} />
        <Route path={routes.chidrenGamesPage()} element={<ChildrenGamesPage/>} />
        <Route path={routes.umnyashaPage()} element={<UmnyashaPage/>} />
        <Route path={routes.galereyaPage()} element={<GalereyaPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
