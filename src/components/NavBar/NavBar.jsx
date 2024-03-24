import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../../Context/UserContextProvider'

const NavBar = () => {
    const navigate = useNavigate()
    const [toggleDropDown, setToggleDropDown] = useState(false)
    const token = sessionStorage.getItem('token')
    const { user, setUser } = useContext(userContext)

    const signOut = () => {
        sessionStorage.clear()
        setUser({}) 
        navigate('/sign-in')
    }

    return (
        <>
            <nav className='flex justify-between items-center w-full mb-16 pt-3'>

                <Link to='/' className='flex gap-2 justify-center items-center'>
                    <img
                        src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/visual-studio.png"
                        alt='Logo'
                        width={30} height={30}
                        className='object-contain'
                    />
                    <p className='logo_text font-satoshi'>ShareCode.io</p>
                </Link>

                {/* desktop navigation */}
                <div className='sm:flex hidden'>
                    {
                        token && user.id ? (
                            <span className='flex gap-x-3'>
                                <button
                                    onClick={() => {
                                        navigate('/create-post')
                                    }}
                                    className=' black_btn font-inter '>
                                    Create New Post
                                </button>
                                <button
                                    onClick={() => {
                                        sessionStorage.removeItem('token')
                                        navigate('/sign-in')
                                    }}
                                    className='outline_btn font-inter '>
                                    Sign Out
                                </button>
                                <Link to={'/profile'}>
                                    <img
                                        src={user?.image}
                                        onError={(e) => e.target.src = "https://img.icons8.com/ios/50/menu--v7.png"}
                                        width={37}
                                        height={37}
                                        className='rounded-full aspect-square object-cover'
                                        alt='profile'
                                        onClick={() => { setToggleDropDown((prev) => !prev) }}
                                    />
                                </Link>
                            </span>
                        ) : (
                            <button
                                onClick={() => {
                                    navigate('/sign-in')
                                }}
                                className='black_btn'>
                                Sign In
                            </button>
                        )
                    }
                </div>

                {/* mobile navigation */}
                <div className='sm:hidden flex relative '>
                    {token && user.id ? (
                        <div className='flex'>
                            <img
                                src={user?.image}
                                onError={(e) => e.target.src = "https://img.icons8.com/ios/50/menu--v7.png"}
                                width={37}
                                height={37}
                                className='rounded-full aspect-square object-cover'
                                alt='profile'
                                onClick={() => { setToggleDropDown((prev) => !prev) }}
                            />

                            {
                                toggleDropDown && (
                                    <div className='dropdown z-20'>
                                        <Link to={'/profile'}
                                            className='dropdown_link font-inter'
                                            onClick={() => setToggleDropDown(false)}
                                        >
                                            My Profile
                                        </Link>

                                        <Link to={'/create-post'}
                                            className='dropdown_link font-inter'
                                            onClick={() => setToggleDropDown(false)}
                                        >
                                            Create Post
                                        </Link>

                                        <button
                                            type='button'
                                            onClick={() => {
                                                setToggleDropDown(false)
                                                signOut()
                                            }}
                                            className='mt-5 w-full black_btn'>
                                            Sign Out
                                        </button>
                                    </div>
                                )
                            }

                        </div>
                    ) : (
                        <>
                            {!token &&
                                (
                                    <Link to={'/sign-in'}
                                        className='black_btn'>
                                        Sign In
                                    </Link>
                                )}
                        </>
                    )}
                </div>


            </nav>
        </>
    )
}

export default NavBar