import './App.css';
import Welcome from "./presenters/Welcome";
import Layout from "./pages/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import QuizPresenter from "./presenters/QuizPresenter"
// import GenrePresenter from "./presenters/GenrePresenter";
import NoPage from "./pages/NoPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Welcome />} />
                  <Route path="game" element={<QuizPresenter />}/>
                  <Route path="*" element={<NoPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
