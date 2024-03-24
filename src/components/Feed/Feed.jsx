import { useContext, useEffect, useState } from "react"
import PostCard from "../postCard/PostCard"
import { fetchAllPostsAPI } from "../../services/allAPI"
import { userContext } from "../../Context/UserContextProvider"
import Pagination from "../Pagination/Pagination"


// component for listing all posts
const PostCardsList = ({ data }) => {
    return (
        <div className="mt-16 post_layout">
            {
            data.length > 0 ?    data.map((post) => (
                // card for display a post
                <PostCard
                    key={post._id}
                    post={post}
                />
            ))  :
            <span className="self-start">No Posts found..</span>
        }
        </div>
    )
}


const Feed = () => {

    const [searchText, setSearchText] = useState('')
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const { refresh } = useContext(userContext)

    const handleSearchChange = (e) => {
        setSearchText(e.target.value)
    }

    const fetchPosts = async () => {
        try {
            let limit = 5
            const response = await fetchAllPostsAPI({ searchText, page: currentPage,limit });
            if (response.status === 200) {
                const { data } = response
                setPosts(data.allPosts)
                setTotalPages(data.totalPages)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [refresh, searchText, currentPage])


    // page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }
    
    const handlePrevPage = () => {
        if(currentPage > 1){
            setCurrentPage(prev => prev - 1);
        }
    }
    
    const handleNextPage = () => {
        if(currentPage < totalPages){
            setCurrentPage(prev => prev + 1);
        }
    }

    return (
        <section className="feed">

            <form className="relative mt-4 mx-auto w-[90vw] md:w-[30vw] flex-center">
                <input type="text"
                    placeholder="Search for a code snippet..."
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input font-satoshi peer"
                />
            </form>

            <PostCardsList
                data={posts}
            />

            {/* pagination component */}
            {
                totalPages > 0 &&
                <Pagination totalPages={totalPages} 
            handlePageChange={handlePageChange}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
            />
            }

        </section>
    )
}

export default Feed