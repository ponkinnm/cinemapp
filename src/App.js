import './App.css';
import Welcome from "./Welcome";
import Layout from "./pages/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Test from "./pages/Test";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import QuizPresenter from "./presenters/QuizPresenter"
import NoPage from "./pages/NoPage";

function App() {
  return (
      <BrowserRouter>
          <UserAuthContextProvider>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Welcome />} />
                  <Route path="game" element={<QuizPresenter />}/>
                  <Route path="*" element={<NoPage />} />
              </Route>
              <Route path="test" element={<Test />} />
          </Routes>
          </UserAuthContextProvider>
      </BrowserRouter>
  );
}

export default App;
