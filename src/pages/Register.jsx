import * as Yup from 'yup'
import FormComponent from '../components/Formik/FormComponent'
import InputField from '../components/Formik/InputField'

const Register = () => {

    const initialValues = {
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("Required..!"),
        email: Yup.string().email('Invalid email Address').required("Required..!"),
        phone: Yup.number().required("Required..!"),
        password: Yup.string().required("Required..!"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
            .required('Confirm password is required'),
    })


    const onSubmit = values => { console.log('form data', values) }

    return (
        <>
            <section className='w-full h-screen flex justify-center items-center'>
                <div className='w-1/3'>
                    <FormComponent initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                        <InputField type="text" label="Name" name="name" />
                        <InputField type="email" label="Email" name="email" />
                        <InputField type="number" label="Phone" name="phone" />
                        <InputField type="password" label="Password" name="password" />
                        <InputField type="password" label="Confirm Password" name="confirmPassword" />
                        <button
                            type='submit'
                            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-2 text-sm font-medium text-white"
                        >
                            Sign Up
                        </button>

                    </FormComponent>
                </div>

            </section>
        </>
    )
}

export default Register