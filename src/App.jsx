
import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
;
import About from "./Pages/About/about";
import RootLayout from "./layout/rootLayout";
import NotFound from "./components/NotFound/NotFound";
import HomePage from "./Pages/HomePage";
import MoneyBag from "./Pages/moneyBag";
import SignIn from "./Pages/AuthenticationPages/SignIn/signIn";
import SignUp from "./Pages/AuthenticationPages/SignUp";
import { DashboardLayout } from "./layout/DashboardLayout";
import Dashboard from "./Pages/Dashboard";



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
        <Route path="signIn" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
