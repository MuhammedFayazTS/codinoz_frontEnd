import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'


const InputField = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className="my-2 w-full">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700"> {label} </label>
            <Field
                name={name}
                id={name}
                {...rest}
                className="mt-1 form_input"
            />
            {/* component to display the error message in form */}
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default InputField