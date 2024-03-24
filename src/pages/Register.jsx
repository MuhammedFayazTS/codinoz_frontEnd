import * as Yup from 'yup'
import FormComponent from '../components/Formik/FormComponent'
import InputField from '../components/Formik/InputField'
import { useState } from 'react'
import { registerAPI } from '../services/allAPI'
import { Link } from 'react-router-dom'
import TextArea from '../components/Formik/TextArea'

const Register = () => {
    // State variables
    const [msg, setMsg] = useState("")
    const [submitting, setSubmitting] = useState(false)

    // Initial values for the form fields
    const initialValues = {
        email: "",
        name: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: "",
    }

    // Validation schema using Yup
    const validationSchema = Yup.object({
        // Define validation rules for each field
        name: Yup.string().required("Name is required..!"),
        email: Yup.string().email('Invalid email Address').required("Email is required !"),
        phone: Yup.string().required("Phone is required !"),
        address: Yup.string().required("Address is required !"),
        password: Yup.string().required("Password is required !"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required .'),
    })

    // Function to handle sign up
    const handleSignUp = async (values) => {
        try {
            setSubmitting(true)
            // Call registerAPI function to register the user
            const response = await registerAPI(values)
            if (response.status === 201) {
                setMsg(response.data.message); // Set message received from the API
            }
        } catch (error) {
            console.log(error.message)
        } finally {
            setSubmitting(false)
        }
    }

    // Function to handle form submission
    const onSubmit = values => {
        handleSignUp(values)
    }

    return (
        <>
            {/* Registration form section */}
            <section className='w-full min-h-screen flex justify-center items-center p-5 md:py-16'>
                <div className='w-full md:w-1/2  md:p-8 md:shadow  md:glassmorphism'>
                    <h2 className=" text-center text-4xl font-bold orange_gradient">SignUp</h2>
                    {/* FormComponent wraps the form */}
                    <FormComponent initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                        {/* Input fields for user information */}
                        <InputField type="text" label="Name" name="name" />
                        <InputField type="email" label="Email" name="email" />
                        <InputField type="number" label="Phone" name="phone" />
                        <TextArea type="text" label="Address" name="address" />
                        <InputField type="password" label="Password" name="password" />
                        <InputField type="password" label="Confirm Password" name="confirmPassword" />

                        {/* Display message after successful sign up */}
                        {
                            msg &&
                            <div className="w-full p-2 inline-flex justify-center items-center rounded text-emerald-600 bg-green-50/80">
                                {msg}
                            </div>
                        }

                        {/* Submit button */}
                        <button
                            type='submit'
                            className="mt-4 px-5 py-1.5 text-base font-semibold orange_gradient-btn rounded-full  text-white"
                        >
                            {submitting ? 'Submitting...' : 'SignUp'}
                        </button>

                        {/* Link to sign in page */}
                        <p>
                            Don't have an account?
                            <Link to={'/sign-in'} className='text-blue-600 hover:underline'>Sign In</Link>
                        </p>
                    </FormComponent>
                </div>
            </section>
        </>
    )
}

export default Register