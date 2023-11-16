import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './routes.js';
import AboutMePage from './pages/AboutMePage';
import ImteacherPage from './pages/ImTeacherPage';
import MainPage from './pages/MainPage';
import MyPublPage from './pages/MyPublPage';
import MyReachmentPage from './pages/MyReacmentPage';
import ParentsPage from './pages/ParentsPage.jsx';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
