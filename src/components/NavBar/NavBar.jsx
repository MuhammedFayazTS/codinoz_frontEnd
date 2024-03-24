import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    const [toggleDropDown,setToggleDropDown] = useState(false)
    const token = sessionStorage.getItem('token')
    const userId= sessionStorage.getItem('userId')

    const signOut =()=>{
        sessionStorage.clear()
        navigate('/sign-in')
    }

    return (
        <>
            <nav className='flex-between w-full mb-16 pt-3'>
                
                {/* desktop navigation */}
                <div className='hidden sm:flex w-full justify-between'>
                <Link to='/' className='flex gap-2 flex-center'>
                    <img
                        src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/visual-studio.png"
                        alt='Logo'
                        width={30} height={30}
                        className='object-contain'
                    />
                    <p className='logo_text font-satoshi'>ShareCode.io</p>
                </Link>

                {
                    token ? (
                        <span className='flex gap-x-3'>
                            <button
                                onClick={() => {
                                    navigate('/create-post')
                                }}
                                className='outline_btn font-inter '>
                                Create New Post
                            </button>
                            <button
                                onClick={() => {
                                    sessionStorage.removeItem('token')
                                    navigate('/sign-in')
                                }}
                                className='black_btn'>
                                Sign Out
                            </button>
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
                    {token && userId ? (
                        <div className='flex'>
                            <img
                                // src={session?.user?.image}
                                src="https://img.icons8.com/ios/50/menu--v7.png"
                                width={37}
                                height={37}
                                className='rounded-full'
                                alt='profile'
                                onClick={() => { setToggleDropDown((prev) => !prev) }}
                            />

                            {
                                toggleDropDown && (
                                    <div className='dropdown'>
                                        <Link href={'/profile'}
                                            className='dropdown_link font-inter'
                                            onClick={() => setToggleDropDown(false)}
                                        >
                                            My Profile
                                        </Link>

                                        <Link href={'/create-prompt'}
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
                                    <Link to={'/login'}
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