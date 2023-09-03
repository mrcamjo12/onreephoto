import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [showButton, setShowButton] = useState(true)
    const [visibleScroll, setVisibleScroll] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
        setShowButton(!showButton)
    }
    // const closeSidebar = () => {
    //     setIsSidebarOpen(false)
    //     setShowButton(!showButton)
    // }

    return <AppContext.Provider value={{
        isSidebarOpen, openSidebar, showButton, setShowButton, visibleScroll, setVisibleScroll
    }}>{children}
    </AppContext.Provider>
}
// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}


export {AppContext, AppProvider}