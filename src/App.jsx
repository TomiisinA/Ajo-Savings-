
import "./App.css";
import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage/homePage";
import About from "./Pages/About/about";
import MoneyBag from "./Pages/moneyBag/moneybag";
import RootLayout from "./layout/rootLayout";
import SignUp from "./Pages/SignUp/SignUp";
import NotFound from "./components/NotFound/NotFound";


function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="moneybag" element={<MoneyBag />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Route>
   
  )
);

  return (
   <RouterProvider router={router}/>
  );
}

export default App;
