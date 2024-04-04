
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="relative hidden h-screen shadow-lg lg:block w-80 z-10">
            <div className="h-full bg-white dark:bg-gray-700 pt-20">
                {/* <div className="flex items-center justify-start pt-6 ml-8">
                    <p className="text-xl font-bold dark:text-white">Plannifer</p>
                </div> */}
                <nav className="mt-6">
                    <div>
                        <Link
                            className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200 "
                            to={"/"}
                        >
                            <span className="text-left">
                                <img src="/home.svg" alt="" className='w-5 h-5' />
                            </span>
                            <span className="mx-2 text-sm font-normal">Home</span>
                        </Link>
                        <Link
                            className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200"
                            to={"/places"}
                        >
                            <span className="text-left">
                                <img src="/marker.svg" alt="" className='w-5 h-5' />
                            </span>
                            <span className="mx-4 text-sm font-normal">Places</span>
                        </Link>
                        <Link
                            className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200"
                            to={"/users"}
                        >
                            <span className="text-left">
                                <img src="/user.svg" alt="" className='w-5 h-5' />
                            </span>
                            <span className="mx-4 text-sm font-normal">Users</span>
                        </Link>
                        <Link
                            className="flex items-center justify-start w-full p-2 pl-6 my-2 text-gray-800 transition-colors duration-200"
                            to={"/bookings"}
                        >
                            <span className="text-left">
                                <img src="/edit.svg" alt="" className='w-5 h-5' />
                            </span>
                            <span className="mx-4 text-sm font-normal">Bookings</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar