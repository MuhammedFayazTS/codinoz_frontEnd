import { useNavigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate()
    const token = sessionStorage.getItem('token')

    // if no token in session storage redirect to login page
    if (!token) {
        navigate('/login')
        return null;
    }
    // validate token
    

    return (
        <>{children}</>
    )
}

export default ProtectedRoute