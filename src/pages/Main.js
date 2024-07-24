import { Outlet } from "react-router-dom"
import NavbarCompo from "./Components/NavbarCompo"
export default function Main(props){
    return(
        <>
            <NavbarCompo NavbarItems={props.navbarItems}/>       
            <Outlet className="row justify-content-start align-items-start g-2"/>
        </>
    )
}