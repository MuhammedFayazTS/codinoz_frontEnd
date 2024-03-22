import { Form, Formik, } from 'formik'

const FormComponent = ({ initialValues, validationSchema, onSubmit, children }) => {

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      {
        formik => (
          <Form>
            {children}
          </Form>
        )
      }
    </Formik>
  )
}

export default FormComponent