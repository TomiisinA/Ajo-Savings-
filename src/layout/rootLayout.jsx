import { Outlet } from "react-router";
import Navbar from "../components/Navbar/navbar";
function RootLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default RootLayout;