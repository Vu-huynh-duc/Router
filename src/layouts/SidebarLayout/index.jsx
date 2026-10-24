import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import Footer2 from "./components/Footer2"
import Sidebar1 from "./components/Sidebar1"
import Sidebar2 from "./components/Sidebar2"
import Navigation from "../../components/Navigation"

const SidebarLayout = () => {
    return <>
    <Header/>
    <Navigation/>
    <div className="wrapper">
    <Sidebar1/>
        <Outlet/>
    <Sidebar2/>
    </div>

    <Footer2/>
    </>
}

export default SidebarLayout