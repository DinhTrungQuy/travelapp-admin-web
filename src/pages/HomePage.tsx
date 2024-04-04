
import { useEffect, useState } from "react"
import { Navbar } from "../component/Navbar"
import { Nofication } from "../component/Nofication"
import { useSelector } from "react-redux"
import { RootState } from "../redux/configureStore"
import { useDispatch } from "react-redux"
import { loginHasDone } from "../redux/slice/authSlice"
import Sidebar from "../component/Sidebar"
import axios from "axios"
import { Dashboard, User } from "../interface/interface"



const HomePage = () => {
    const loading = useSelector((state: RootState) => state.auth.loading)
    const [isVisible, setIsVisible] = useState(false)
    const [response, setResonse] = useState<Dashboard>()
    const dispatch = useDispatch()

    useEffect(() => {
        if (loading) {
            setIsVisible(true)
            dispatch(loginHasDone())
            const timeOut = setTimeout(() => {
                setIsVisible(false)
            }, 3000)
            return () => {
                clearTimeout(timeOut)
            }
        }
    }, [dispatch, loading])
    useEffect(() => {
        axios.get('https://quydt.speak.vn/api/dashboard', {
            withCredentials: true,
        }).then(res => {
            setResonse(res.data)
        })
    }, [])
    const [tableItems, setTableItems] = useState([])
    useEffect(() => {
        axios.get("https://quydt.speak.vn/api/Auth", {
            withCredentials: true
        })
            .then(response => {
                setTableItems(response.data);
            })
    }, [])


    return (
        <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
            <div className="flex items-start justify-between">
                <Navbar />
                <Sidebar />
                <div className="flex flex-col w-full md:space-y-4">
                    <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
                        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white pt-20">
                            Hi, Admin
                        </h1>
                        <h2 className="text-gray-400 text-md">
                            Here's what's happening with your ambassador account today.
                        </h2>
                        <div className="flex flex-col items-center w-full my-6 space-y-4 md:space-x-4 md:space-y-0 md:flex-row">
                            {/* <div className="w-full md:w-6/12">
                                <div className="relative w-full overflow-hidden bg-white shadow-lg dark:bg-gray-700">
                                    <a href="#" className="block w-full h-full">
                                        <div className="flex items-center justify-between px-4 py-6 space-x-4">
                                            <div className="flex items-center">
                                                <span className="relative p-5 bg-yellow-100 rounded-full">
                                                    <svg
                                                        width={40}
                                                        fill="currentColor"
                                                        height={40}
                                                        className="absolute h-5 text-yellow-500 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                        viewBox="0 0 1792 1792"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                                                    </svg>
                                                </span>
                                                <p className="ml-2 text-sm font-semibold text-gray-700 border-b border-gray-200 dark:text-white">
                                                    Level 2 Ambassador
                                                </p>
                                            </div>
                                            <div className="mt-6 text-xl font-bold text-black border-b border-gray-200 md:mt-0 dark:text-white">
                                                $44,453.39
                                                <span className="text-xs text-gray-400">/$100K</span>
                                            </div>
                                        </div>
                                        <div className="w-full h-3 bg-gray-100">
                                            <div className="w-2/5 h-full text-xs text-center text-white bg-green-400"></div>
                                        </div>
                                    </a>
                                </div>
                            </div> */}
                            <div className="flex items-center w-full space-x-4 md:w-full">
                                <div className="w-1/2">
                                    <div className="relative w-full px-4 py-6 bg-white shadow-lg">
                                        <p className="text-2xl font-bold text-black dark:text-white">
                                            {response?.totalPlaces}
                                        </p>
                                        <p className="text-sm text-gray-400">Active places</p>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="relative w-full px-4 py-6 bg-white shadow-lg ">
                                        <p className="text-2xl font-bold text-black dark:text-white">
                                            {response?.totalUsers}
                                        </p>
                                        <p className="text-sm text-gray-400">Total Users</p>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="relative w-full px-4 py-6 bg-white shadow-lg ">
                                        <p className="text-2xl font-bold text-black dark:text-white">
                                            {`$ ${response?.profit}`}
                                        </p>
                                        <p className="text-sm text-gray-400">Profit today</p>
                                        <span className="absolute p-4 bg-purple-500 rounded-full top-2 right-4">
                                            <svg
                                                width={40}
                                                fill="currentColor"
                                                height={40}
                                                className="absolute h-4 text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                                viewBox="0 0 1792 1792"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                            Overview
                        </h2>

                        <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-2 lg:grid-cols-3 space-x-4">
                            {/* <InfoTile />
                            <InfoTile />
                            <InfoTile /> */}
                        </div>


                        <div className="space-x-4">
                            <h3 className="mb-4">New Users</h3>
                            <table className="w-full table-auto text-sm text-left border shadow-lg ">
                                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                                    <tr>
                                        <th className="py-3 px-6">Name</th>
                                        <th className="py-3 px-6">Fullname</th>
                                        <th className="py-3 px-6">Phone</th>
                                        <th className="py-3 px-6">Email</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 divide-y bg-white">
                                    {
                                        tableItems.reverse().map((item: User, idx) => {
                                            // if (idx < 3)
                                                return (
                                                    <tr key={idx}>
                                                        <td className="flex items-center gap-2 px-6 py-4 whitespace-break-spaces">
                                                            <img src={item.imageUrl ? item.imageUrl : 'https://quydt.speak.vn/images/default-user.png'} alt="" className="rounded-full w-10 h-10" />
                                                            {item.username}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-break-spaces">{item.fullname}</td>
                                                        <td className="px-6 py-4 whitespace-break-spaces">{item.phone}</td>
                                                        <td className="px-6 py-4 whitespace-break-spaces">{item.email}</td>
                                                    </tr>
                                                )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
            <Nofication isVisible={isVisible} setIsVisible={setIsVisible} />
        </main >

    )
}

export default HomePage