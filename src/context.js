import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isButtonShown, setShowButton] = useState(true)

    const openSidebar = () => {
        setIsSidebarOpen(true)
        setShowButton(false)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
        setShowButton(true)
    }

    return <AppContext.Provider value={{
        isSidebarOpen, openSidebar, closeSidebar, isButtonShown, setShowButton
    }}>{children}
    </AppContext.Provider>
}
// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}


export {AppContext, AppProvider}