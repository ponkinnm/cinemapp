import './App.css';
import Welcome from "./Welcome";
import Layout from "./pages/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Test from "./pages/Test";
import GamePresenter from "./presenters/GamePresenter";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Signup from "./Signup";
import QuizPresenter from "./presenters/QuizPresenter"
function App() {
  return (
      <BrowserRouter>
          <UserAuthContextProvider>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Welcome />} />
                  <Route path="game" element={<QuizPresenter />}/>
                  <Route path="signup" element={<Signup />} />
{/*
                  <Route path="*" element={<NoPage />} />
*/}
              </Route>
              <Route path="test" element={<Test />} />
          </Routes>
          </UserAuthContextProvider>
      </BrowserRouter>
    /*<div className="App">

      <header className="App-header">
      </header>
        <Welcome hej={"amdkmk"}/>
    </div>*/
  );
}

export default App;
