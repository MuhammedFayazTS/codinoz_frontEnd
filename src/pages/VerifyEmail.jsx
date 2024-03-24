import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { verifyAPI } from "../services/allAPI"
import verifyImg from "../assets/images/verified.jpg"
const VerifyEmail = () => {

  const [validUrl, setValidUrl] = useState(false)
  const { id, token } = useParams()

  useEffect(() => {
    const VerifyEmailUrl = async () => {
      try {
        const response = await verifyAPI(id, token)
        if (response.status === 200) setValidUrl(true)
      } catch (error) {
        setValidUrl(false)
      }
    }

    VerifyEmailUrl();
  }, [])

  return (
    <>
      <section className='w-full h-screen flex flex-col justify-center items-center gap-y-3'>
        {
          validUrl ? (
            <>
            <img width={150} height={150} src={verifyImg} alt="Verifyimage.png" 
            loading="lazy"
            className="object-contain rounded-full mix-blend-darken" />
              <h2 className='text-4xl font-bold green_gradient'>Email Verififed Successfully</h2>
              <Link  to={'/sign-in'}
              className="mt-4 px-5 py-1.5 text-base font-semibold orange_gradient-btn rounded-full  text-white"
              >
                SignIn
              </Link>
            </>
          ) : (
            <h1 className="text-6xl font-bold">404 NotFound</h1>
          )
        }
      </section>
    </>

  )
}

export default VerifyEmail