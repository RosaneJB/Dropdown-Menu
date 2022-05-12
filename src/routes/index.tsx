import { Route, Routes } from "react-router-dom"
import { Help, Home, Logout, Messages, Notification, Profile, Settings } from "../pages"

export const MainRoutes = ()=> {
  return (
    <Routes>
      <Route path = "/home" element={<Home/>}/>
      <Route path = "/help" element={<Help/>}/>
      <Route path = "/logout" element={<Logout/>}/>
      <Route path = "/messages" element={<Messages/>}/>
      <Route path = "/notification" element={<Notification/>}/>
      <Route path = "/profile" element={<Profile/>}/>
      <Route path = "/settings" element={<Settings/>}/>
      <Route path = "*" element={<Home/>}/>
    </Routes>
  )
}