// component to display the error message in form
const TextError = (props) => {
  return (
    <div className='text-sm mt-1 text-red-400'>
      {props.children}
    </div>
  )
}

export default TextError