import React from 'react'
import * as Yup from 'yup'
import FormComponent from '../components/Formik/FormComponent'
import InputField from '../components/Formik/InputField'

const Login = () => {

    const initialValues = {
        email: "",
        password: "",
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email Address').required("Required..!"),
        password: Yup.string().required("Required..!"),
    })


    const onSubmit = values => { console.log('form data', values) }

    return (
        <>
            <section className='w-full h-screen flex justify-center items-center'>
                <div className='w-1/3'>
                    <FormComponent initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                        <InputField type="email" label="Email" name="email" />
                        <InputField type="password" label="Password" name="password" />
                        <button
                            type='submit'
                            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-2 text-sm font-medium text-white"
                        >
                            Sign In
                        </button>

                    </FormComponent>
                </div>

            </section>
        </>
    )
}

export default Login