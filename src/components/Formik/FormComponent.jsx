import { Form, Formik, } from 'formik'

const FormComponent = ({ initialValues, validationSchema, onSubmit, children }) => {

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {
        formik => (
          <Form className='flex flex-col items-center gap-y-2'>
            {children}
          </Form>
        )
      }
    </Formik>
  )
}

export default FormComponent