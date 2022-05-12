import { Link } from "react-router-dom"
import { BiUser } from 'react-icons/bi'
import { IoIosHelpCircleOutline, IoMdNotificationsOutline } from 'react-icons/io'
import { FiMessageSquare } from 'react-icons/fi'  
import { HiOutlineLogout } from 'react-icons/hi'  
import { AiOutlineSetting } from 'react-icons/ai'  
import { useState } from "react"
import './style.css'

export const UserProfile = () => {
    const [isNavigationOpen, setIsNavigationOpen] = useState(false)
    return (
        <>
         <div className={`navigation ${isNavigationOpen ? 'active' : ''}`}>
        <div className="userBx">
            <div className="imgBx">
                <img src="/perfil.jfif" alt="perfil" />
            </div>
            <p className="username">RosaneJB</p>
        </div>
        <div className="menuToggle" onClick={() => setIsNavigationOpen(!isNavigationOpen)}></div>
        <ul className="menu">
            <li><Link to="/profile"><BiUser />My Profile</Link></li>
            <li><Link to="/messages"><FiMessageSquare />Messages</Link></li>
            <li><Link to="/notification"><IoMdNotificationsOutline />Notification</Link></li>
            <li><Link to="/settings"><AiOutlineSetting />Settings</Link></li>
            <li><Link to="/help"><IoIosHelpCircleOutline />Help & Support</Link></li>
            <li><Link to="/logout"><HiOutlineLogout />Logout</Link></li>
        </ul>
    </div>
        </>
    )
}