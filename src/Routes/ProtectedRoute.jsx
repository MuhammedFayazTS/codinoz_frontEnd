import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()
    const token = sessionStorage.getItem('token')

    useEffect(() => {
        // if no token in session storage redirect to login page
        if (!token) {
            navigate('/sign-in')
            return null;
        }
        // validate token
    }, [token])


    return (
        <>{children}</>
    )
}

export default ProtectedRoute