import * as Yup from 'yup'
import FormComponent from '../components/Formik/FormComponent'
import InputField from '../components/Formik/InputField'
import { useState } from 'react'
import { registerAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'
import TextArea from '../components/Formik/TextArea'

const Register = () => {

    const [msg, setMsg] = useState("")
    const [submitting, setSubmitting] = useState(false)
    

    const initialValues = {
        email: "",
        name: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: "",
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("Required..!"),
        email: Yup.string().email('Invalid email Address').required("Email is required !"),
        phone: Yup.string().required("Phone is required !"),
        password: Yup.string().required("Password is required !"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required .'),
    })

    const handleSignUp = async (values) => {
        try {
            setSubmitting(true)
            const { data } = await registerAPI(values)
            setMsg(data.message);
        } catch (error) {
            console.log(error.message)
        }finally{
            setSubmitting(false)
        }
    }

    const onSubmit = values => {
        handleSignUp(values)
    }

    return (
        <>
            <section className='w-full min-h-screen flex justify-center items-center p-5 md:py-16'>
                <div className='w-full md:w-1/2 p-8 shadow  glassmorphism'>
                <h2 className=" text-center text-4xl font-bold orange_gradient">SignUp</h2>
                    <FormComponent initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                        <InputField type="text" label="Name" name="name" />
                        <InputField type="email" label="Email" name="email" />
                        <InputField type="number" label="Phone" name="phone" />
                        <TextArea type="text" label="Address" name="address" />
                        <InputField type="password" label="Password" name="password" />
                        <InputField type="password" label="Confirm Password" name="confirmPassword" />

                        {/* display verify email send message */}
                        {
                            msg &&
                            <div className="w-full p-2 inline-flex justify-center items-center rounded text-emerald-600 bg-green-50/80">
                                {msg}
                            </div>
                        }

                        <button
                            type='submit'
                            className="mt-4 px-5 py-1.5 text-base font-semibold orange_gradient-btn rounded-full  text-white"
                        >
                            {submitting?'Submitting...':'SignUp'}
                        </button>


                        {/* sign in page link */}
                        <p>
                            don't have an account?
                            <Link to={'/sign-in'}
                                className='text-blue-600 hover:underline'>Sign In</Link>
                        </p>

                    </FormComponent>
                </div>

            </section>
        </>
    )
}

export default Register