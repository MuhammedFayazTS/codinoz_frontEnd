import Feed from "../components/Feed/Feed"

const Home = () => {
  return (
    <>
      <section className='w-full flex flex-col justify-center items-center '>
        {/* heading */}
        <h1 className='head_text text-center'>
          Discover and Share
          <br className='max-md:hidden' />
          <span className='orange_gradient text-center' >
            Code Snippets
          </span>
        </h1>
        {/* description */}
        <p className='desc text-center'>
        The go-to platform for sharing and discovering code snippets. Share, explore, and collaborate effortlessly with fellow developers.
        </p>

        <Feed />

      </section>
    </>
  )
}

export default Home