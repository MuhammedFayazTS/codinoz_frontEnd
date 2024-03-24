import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <>
    {/* act as a container for the pages which require nav bar  */}
      <NavBar />
      <Outlet />
    </>
  )
}

export default MainPage