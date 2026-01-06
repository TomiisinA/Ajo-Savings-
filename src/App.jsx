import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
;
import About from "./Pages/About/about";
import MoneyBag from "./Pages/moneyBag/moneybag";
import RootLayout from "./layout/rootLayout";

import NotFound from "./components/NotFound/NotFound";
import SignIn from "./Pages/SignIn/signIn";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="moneybag" element={<MoneyBag />} />
        </Route>
        <Route path="signUp" element={<SignUp />} />
        <Route path="signIn" element={<SignIn/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
