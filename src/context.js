import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [visibleScroll, setVisibleScroll] = useState(false)
    const btn = document.getElementById('side-btn')
    const cbtn = document.getElementById('c-btn')

    const openSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
        btn.addEventListener('click', () => {
            btn.style.visibility='hidden'
    })
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
        cbtn.addEventListener('click', () => {
            btn.style.visibility='visible'
        })
        
    }

    return <AppContext.Provider value={{
        isSidebarOpen, openSidebar, visibleScroll, closeSidebar, setVisibleScroll
    }}>{children}
    </AppContext.Provider>
}
// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}


export {AppContext, AppProvider}