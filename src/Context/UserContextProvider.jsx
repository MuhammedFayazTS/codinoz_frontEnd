import { createContext, useEffect, useState } from 'react'

export const userContext = createContext()
const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({})
    // for refetching data
    const [refresh, setRefresh] = useState(false)
    // token
    const token = sessionStorage.getItem('token')

    useEffect(() => {
        const userData = JSON.parse(sessionStorage.getItem('user'))
        setUser(userData)
    }, [token])
    return (
        <userContext.Provider value={{ user, setUser,refresh,setRefresh }}>{children}</userContext.Provider>
    )
}

export default UserContextProvider