import { useContext, useEffect, useState } from "react"
import PostCard from "../components/postCard/PostCard"
import { userContext } from "../Context/UserContextProvider"
import { fetchUserPostsAPI } from "../services/allAPI"

const Profile = () => {
    const { user, refresh } = useContext(userContext)
    const [posts, setPosts] = useState([])


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                let token = sessionStorage.getItem('token')
                const header = {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
                const response = await fetchUserPostsAPI(header);
                if (response.status === 200) {
                    const { data } = response
                    setPosts(data.allPosts)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchPosts();
    }, [refresh, user])

    return (
        <section className="w-full">
            <h1 className="head_text text-left">
                <span className="blue_gradient">{user.name} Profile</span>
            </h1>
            <p className="desc text-left">
                {user.email}
            </p>

            <hr className=" my-5 border border-gray-300" />

            <div className=" post_layout">
                {posts?.map((post) => (
                    <PostCard
                        key={post._id}
                        post={post}
                    // handleEdit={handleEdit && handleEdit(post)}
                    />
                ))}
            </div>

        </section>
    )
}

export default Profile