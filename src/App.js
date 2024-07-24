import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import StaffDashboard from "./pages/StaffDash/StaffDashboard";
import UserDashboard from "./pages/UserDash/UserDashboard";
import Register from "./pages/Register";
import NoPage from "./pages/NoPage";

export default function App(){
  const navbarItem = [{link:'/',label:'Login'},{link:'/staff',label:'Staff Dashboard'},{link:'/user',label:'User Dashboard'},{link:'/reg',label:'Register'}]
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main navbarItems={navbarItem}/>}>
          <Route index element={<Login/>}/>
          <Route path="staff" element={<StaffDashboard/>}/>
          <Route path="user" element={<UserDashboard/>}/>
          <Route path="reg" element={<Register />}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}