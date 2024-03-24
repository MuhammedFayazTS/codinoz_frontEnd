import { Link } from 'react-router-dom'

const PostsForm = ({ handleSubmit, submitting, type, post, setPost }) => {

    return (
        <section className='w-full h-fit pb-5 flex justify-center items-center'>

            <form
                onSubmit={handleSubmit}
                className="mt-5 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
            >

                <h2 className="text-4xl text-left font-extrabold">
                    <span className="blue_gradient">
                        {type} Post
                    </span>
                </h2>


                <label>
                    <span className="font-sathoshi font-semibold text-base text-gray-700">
                        Title
                        <span className="font-normal">(#prime numer, #formvalidation,#print pattern)</span>
                    </span>

                    <input
                        value={post.title}
                        onChange={(e) => setPost({
                            ...post,
                            title: e.target.value
                        })}
                        required
                        placeholder="Title for the code snippet"
                        className="form_input"
                    />
                </label>

                <label>
                    <span className="font-sathoshi font-semibold text-base text-gray-700">
                        Code Snippet
                    </span>

                    <textarea
                        value={post.codeSnippet}
                        onChange={(e) => setPost({
                            ...post,
                            codeSnippet: e.target.value
                        })}
                        required
                        placeholder="Write your codeSnippet here..."
                        className="form_textarea"
                    />
                </label>


                <div className="flex-end mx-3 mb-5 flex items-center justify-center gap-3 ">
                    <Link
                        href={'/'}
                        className="text-gray-500 text-sm px-5 py-1.5 rounded-full hover:bg-black/10"
                    >
                        Cancel
                    </Link>

                    <button type="submit"
                        disabled={submitting}
                        className="px-5 py-1.5 text-sm orange_gradient-btn rounded-full  text-white hover:outline hover:outline-black/20"
                    >
                        {submitting ? `${type}...` : type}
                    </button>
                </div>

            </form>
        </section>
    )
}

export default PostsForm