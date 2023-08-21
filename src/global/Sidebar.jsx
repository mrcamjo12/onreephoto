import { NavLink } from "react-router-dom";
import {AiOutlineBars, AiOutlineClose} from 'react-icons/ai'
import { useState } from "react";


export default function Sidebar({children}) {
    const menuItem = [
        {
            title: 'home.',
            path: '/',
        },
        {
            title: 'about.',
            path: "/about"
        },
        {
            title: 'flight.',
            path: '/flight'
        },
        {
            title: 'sports.',
            path: '/sports'
        },
        {
            title: 'world.',
            path: '/world'
        },
        {
            title: "people.",
            path: '/people'
        },
        {
            title: 'clients.',
            path: '/clients'
        }
    ]

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {setIsOpen(!isOpen)}
    return (
        <div className="container">
            
                <div className="sidebar" style={{display: isOpen ? 'block':''}}>
                <div className='bars' onClick={toggle}>{isOpen? <AiOutlineClose /> : <AiOutlineBars />}</div>
                <h1 className="logo">
                    <span>onree</span>Photography</h1>
                
                <div className="menu">
                    <div>
                        {
                            menuItem.map((item, index) => (
                                <NavLink to={item.path} key={index}
                                className='link'>
                                    <div className="link_title">{item.title}</div>
                                </NavLink>
                        ))}
                    </div>
                </div>                 
            </div>
            <main>{children}</main>
        </div>
    )
}