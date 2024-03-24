import { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import tickIco from "../../assets/icons/tick.svg"
import copyIco from "../../assets/icons/copy.svg"
import { postContext } from "../../Context/PostContextProvider"
import { deletePostAPI } from "../../services/allAPI"
import { userContext } from "../../Context/UserContextProvider"



const PostCard = ({ post }) => {
 // Hooks initialization
 const navigate = useNavigate()
 const location = useLocation();
 const token = sessionStorage.getItem('token')
 const { user, setRefresh } = useContext(userContext)
 const [copied, setCopied] = useState("")

 // Function to copy code snippet to clipboard
 const handleCopy = () => {
   setCopied(post.codeSnippet)
   navigator.clipboard.writeText(post.codeSnippet);
   setTimeout(() => setCopied(""), 5000)
 }

 // Accessing post context for setting post data
 const { setPostData } = useContext(postContext)

 // Function to handle editing a post
 const handleEdit = (e, post) => {
   e.preventDefault();
   setPostData(post)
   navigate(`/edit-post/${post._id}`)
  }
  
  // Function to handle deleting a post
  const handleDelete = async (e, postId) => {
    e.preventDefault();
    try {
      const header = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
      const response = await deletePostAPI(postId, header)
      if (response.status === 200) {
        alert(response.data.message)
        setRefresh(prev => !prev)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="post_card ">
      <div className="flex justify-between items-start gap-5">
        <div className="flex flex-1 justify-start items-center gap-3 cursor-pointer">
          <img
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full aspect-square object-cover object-center"
          />

          <div className="flex flex-col">
            <h3 className="font-sathoshi font-semibold text-gray-900">
              {post.creator.name}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={() => handleCopy()} >
          <img
            src={copied === post.codeSnippet
              ? tickIco
              : copyIco}
            alt="copy_image"
            width={12}
            height={12}
          />
        </div>
      </div>

      <div className="mt-4 rounded">
        <p className="font-inter text-sm font-serif blue_gradient cursor-pointer">
          #{post.title}
        </p>

        <p className="my-4 max-h-[300px] overflow-y-auto font-sathoshi text-sm p-2 rounded bg-gray-200/50">
          <span className="bg-clip-text text-transparent black_gradient text-left">
            {post.codeSnippet}
          </span>
        </p>


      </div>
      
      {/*Renders the edit and delete button only if the follwing conditions are true */}
      {token && user.id === post.creator._id && location.pathname === "/profile" &&
        (
          <div className="mt-5 flex justify-center items-center gap-4 border-t border-gray-100 pt-3">
            <p
              className="font-inter text-sm green_gradient cursor-pointer"
              onClick={(e) => handleEdit(e, post)}
            >
              Edit
            </p>
            <p
              className="font-inter text-sm orange_gradient cursor-pointer"
              onClick={(e) => handleDelete(e, post._id)}
            >
              Delete
            </p>
          </div>
        )}

    </div>
  )
}

export default PostCard