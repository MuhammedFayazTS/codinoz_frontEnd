import { useState } from 'react'
import * as Yup from 'yup'
import FormComponent from '../components/Formik/FormComponent'
import InputField from '../components/Formik/InputField'
import { loginAPI } from '../services/allAPI'
import { Link, useNavigate } from "react-router-dom"

const Login = () => {

    const [msg, setMsg] = useState("")
    const [submitting, setSubmitting] = useState(false)

    const navigate = useNavigate()

    const initialValues = {
        email: "",
        password: "",
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email Address').required("Email is required !"),
        password: Yup.string().required("Password is required !"),
    })

    const handleSignIn = async (values) => {
        try {
            setSubmitting(true)
            const response = await loginAPI(values)
            if (response.status === 200) {
                setMsg(response.data.message);
                sessionStorage.setItem('token', response.data.token)
                sessionStorage.setItem('user',JSON.stringify(response.data.user))
                navigate('/welcome')
            }
        } catch (error) {
            console.log(error.message)
        } finally {
            setSubmitting(false)
        }
    }

    const onSubmit = values => {
        handleSignIn(values)
    }

    return (
        <>
            <section className='w-full min-h-screen flex justify-center items-center'>

                <div className='w-full md:w-1/2  md:p-8 md:shadow  md:glassmorphism'>
                    <h2 className=" text-center text-4xl font-bold orange_gradient">SignIn</h2>
                    <FormComponent initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                        <InputField type="email" label="Email" name="email" />
                        <InputField type="password" label="Password" name="password" />

                        {/* display verify email send message */}
                        {
                            msg &&
                            <div className="w-full p-2 inline-flex justify-center items-center rounded text-green-500 bg-green-100">
                                {msg}
                            </div>
                        }

                        <button
                            type='submit'
                            className="mt-4 px-5 py-1.5 text-base font-semibold orange_gradient-btn rounded-full  text-white"
                        >
                            {submitting ? 'Submitting...' : 'SignIn'}
                        </button>

                        {/* sign up page link */}
                        <p>
                            don't have an account?
                            <Link to={'/sign-up'}
                                className='text-blue-600 hover:underline'>Sign Up</Link>
                        </p>

                    </FormComponent>
                </div>

            </section>
        </>
    )
}

export default Login