import { createContext, useEffect, useState } from 'react'

export const userContext = createContext()
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    // for refetching data
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        const userData = JSON.parse(sessionStorage.getItem('user'))
        setUser(userData)
    }, [])
    return (
        <userContext.Provider value={{ user, setUser,refresh,setRefresh }}>{children}</userContext.Provider>
    )
}

export default UserContextProvider