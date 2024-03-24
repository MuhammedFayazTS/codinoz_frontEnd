import React, { useState } from 'react'
import { createNewPostAPI } from '../../services/allAPI'
import PostsForm from '../PostsForm/PostsForm';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

    const [submitting, setSubmitting] = useState(false);
    const navigate = useNavigate()
    const [post, setPost] = useState({
        title: "",
        codeSnippet: "",
    })
    const createNewPost = async (e) => {
        e.preventDefault()
        try {
            setSubmitting(true)
            let token = sessionStorage.getItem('token');
            const header = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
            const response = await createNewPostAPI(post,header)
            if (response.status === 201) {
                alert('New post created successfully')
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
                <PostsForm handleSubmit={createNewPost} type={"Create"} submitting={submitting} post={post} setPost={setPost} />
            </section>
        </>
    )
}

export default CreatePost