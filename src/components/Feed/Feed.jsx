import { useContext, useEffect, useState } from "react"
import PostCard from "../postCard/PostCard"
import { fetchAllPostsAPI } from "../../services/allAPI"
import { userContext } from "../../Context/UserContextProvider"



const PostCardsList = ({ data, handleTagClick }) => {
    return (
        <div className="mt-16 post_layout">
            {data.map((post) => (
                <PostCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}


const Feed = () => {

    const [searchText, setSearchText] = useState('')
    const [posts, setPosts] = useState([])
    const {refresh} = useContext(userContext)

    const handleSearchChange = (e) => {

    }

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetchAllPostsAPI();
                if (response.status === 200) {
                    const {data} = response
                    setPosts(data.allPosts)
                } 
            } catch (error) {
                console.log(error)
            }
        }

        fetchPosts();
    }, [refresh])

    return (
        <section className="feed">

            {/* <form className="relative mx-auto w-full md:w-1/2 flex-center">
                <input type="text"
                    placeholder="Search for a tag or a username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input font-satoshi peer"
                />
            </form> */}

            <PostCardsList
                data={posts}
                handleTagClick={() => { }}
            />
        </section>
    )
}

export default Feed