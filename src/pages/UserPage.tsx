import { useEffect, useState } from "react"
import { Navbar } from "../component/Navbar.tsx"
import axios from "axios"
import { Place, User } from "../interface/interface.ts"
import { Link } from "react-router-dom"
import Sidebar from "../component/Sidebar.tsx"
import DeleteModal from "../component/DeleteModal.tsx"

const UserPage = () => {
    const [tableItems, setTableItems] = useState([])
    useEffect(() => {
        axios.get("https://quydt.speak.vn/api/Auth", {
            withCredentials: true
        })
            .then(response => {
                setTableItems(response.data);
            })
    }, [])
    const handleDelete = (id: string) => {
        axios.delete(`https://quydt.speak.vn/api/user/${id}`, {
            withCredentials: true
        })
            .then(response => {
                setTableItems(tableItems.filter((item: Place) => item.id !== id))
                console.log(response)
            })
    }
    console.log(tableItems)
    return (
        <main className="relative h-screen max-h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
            <div className="flex items-start justify-between h-full pb-5">
                <Navbar />
                <Sidebar />
                <div className="flex flex-col w-full md:space-y-4 h-full overflow-y-scroll">
                    <div className="max-w-screen-xl mx-auto px-4 md:px-8 pt-32">
                        <div className="items-start justify-between md:flex">
                            <div className="max-w-lg">
                                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                                    Users Edit
                                </h3>
                            </div>
                            {/* <div className="mt-3 md:mt-0">
                                <Link to={"/resources/add"}
                                    className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                                >
                                    Add place
                                </Link>
                            </div> */}
                        </div>
                        <div className="mt-12 shadow-sm border rounded-lg">
                            <table className="w-full table-auto text-sm text-left ">
                                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                                    <tr>
                                        <th className="py-3 px-6">Username</th>
                                        <th className="py-3 px-6">Fullname</th>
                                        <th className="py-3 px-6">Phone</th>
                                        <th className="py-3 px-6">Email</th>
                                        <th className="py-3 px-6"></th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 divide-y">
                                    {
                                        tableItems.map((item: User, idx) => (
                                            <tr key={idx} >
                                                <td className="gap-2 px-6 py-4 whitespace-break-spaces align-middle">
                                                    <div className="flex items-center">
                                                        <img src={item.imageUrl ? item.imageUrl : 'https://quydt.speak.vn/images/default-user.png'} alt="" className="rounded-full w-10 h-10 mx-2" />
                                                        <p className="text-center">{item.username}</p>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-break-spaces align-middle">{item.fullname}</td>
                                                <td className="px-6 py-4 whitespace-break-spaces align-middle">{item.phone}</td>
                                                <td className="px-6 py-4 whitespace-break-spaces align-middle">{item.email}</td>
                                                <td className="text-right px-6 whitespace-nowrap flex justify-center items-center flex-col align-middle">
                                                    <Link
                                                        className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                                                        to={`/users/edit/${item.id}`}>
                                                        Edit
                                                    </Link>
                                                    <DeleteModal handleFunction={() => handleDelete(item.id)} />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default UserPage