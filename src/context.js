import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [visibleScroll, setVisibleScroll] = useState(false)


    const openSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    return (
        <AppContext.Provider value={{
            isSidebarOpen, 
            openSidebar,
            closeSidebar,
            visibleScroll, 
            setVisibleScroll
    }}>
        {children}
    </AppContext.Provider>
    );
}
// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}


export {AppContext, AppProvider}