import { ErrorMessage } from 'formik'
import TextError from './TextError'


const TextArea = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className="my-2 w-full">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700"> {label} </label>
            <textarea
                name={name}
                id={name}
                {...rest}
                className="mt-1 form_textarea h-24 max-h-40 min-h-20"
            />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default TextArea