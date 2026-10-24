import Footer from "./components/Footer"
import Header from "../components/Header"
import Navigation from "../../components/Navigation"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return <>
    <Header/>
    <Navigation />
    <div className="wrapper">
        <Outlet/>
    </div>
    <Footer/>
    </>
}

export default DefaultLayout