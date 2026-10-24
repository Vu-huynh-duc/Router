import Header from "../components/Header"
import { Outlet } from "react-router-dom"
import Footer3 from "./components/Footer3"
import Navigation from "../../components/Navigation"

const AdminLayout = () => {
    return <>
    <Header/>
    <Navigation/>
    <div className="wrapper">    
        <Outlet/>    
    </div>

    <Footer3/>
    </>
}

export default AdminLayout