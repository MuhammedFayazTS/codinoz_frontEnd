import { createContext, useState } from "react"

export const postContext = createContext()
const PostContextProvider = ({ children }) => {
    const initialState = {
        title: "",
        codeSnippet: "",
    }
    const [postData, setPostData] = useState(initialState)
    return (
        <postContext.Provider value={{ postData, setPostData, initialState }} >
            {children}
        </postContext.Provider>
    )
}

export default PostContextProvider