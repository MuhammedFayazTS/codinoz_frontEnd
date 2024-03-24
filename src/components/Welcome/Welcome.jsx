import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <>
            <section className='w-full h-[calc(100vh-8rem)] flex flex-col justify-center items-center'>
                <h1 className='orange_gradient  head_text text-center'>
                    Welcome to ShareCode,
                </h1>
                <span className='mt-2 text-center black_gradient bg-clip-text text-transparent text-2xl font-medium' >
                    "Where Creativity Meets Collaboration!"
                </span>

                <p className='desc text-center'>
                    Start your journey by sharing a code snippet
                </p>

                {/* create a new post */}
                <span className='mt-5 flex items-center gap-x-3'>
                    <Link to={'/'}
                        className=' outline_btn font-inter '>
                        Browse Feed
                    </Link>
                    <Link to={'/create-post'}
                        className='black_btn font-inter '>
                        Create New Post
                    </Link>
                </span>

            </section>
        </>
    )
}

export default Welcome