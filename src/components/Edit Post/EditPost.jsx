import { useContext, useState } from 'react'
import { editPostAPI } from '../../services/allAPI'
import PostsForm from '../PostsForm/PostsForm';
import { useNavigate, useParams } from 'react-router-dom';
import { postContext } from '../../Context/PostContextProvider';

const EditPost = () => {

    const navigate = useNavigate()
    const [submitting, setSubmitting] = useState(false);
    const postId = useParams().id
    const { postData, setPostData, initialState } = useContext(postContext)
    const editPost = async (e) => {
        e.preventDefault()
        try {
            setSubmitting(true)
            let token = sessionStorage.getItem('token');
            const header = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
            const response = await editPostAPI(postId, postData, header)
            if (response.status === 200) {
                alert('Post edited successfully')
                setPostData(initialState)
                navigate('/')
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setSubmitting(false)
        }
    }
    return (
        <>
            <section className='w-full flex justify-center'>
                <PostsForm handleSubmit={editPost} type={"Edit"} submitting={submitting} post={postData} setPost={setPostData} />
            </section>
        </>
    )
}

export default EditPost