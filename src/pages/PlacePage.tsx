import { useEffect, useState } from "react"
import { Navbar } from "../component/Navbar.tsx"
import axios from "axios"
import { Place } from "../interface/interface.ts"
import { Link } from "react-router-dom"
import Sidebar from "../component/Sidebar.tsx"
import DeleteModal from "../component/DeleteModal.tsx"

const PlacePage = () => {
    const [tableItems, setTableItems] = useState([])
    useEffect(() => {
        axios.get("https://quydt.speak.vn/api/place", {
            withCredentials: true
        })
            .then(response => {
                setTableItems(response.data);
            })
    }, [])
    const handleDelete = (id: string) => {
        axios.delete(`https://quydt.speak.vn/api/place/${id}`, {
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
                                    Places Edit
                                </h3>
                            </div>
                            <div className="mt-3 md:mt-0">
                                <Link to={"/places/add"}
                                    className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
                                >
                                    Add place
                                </Link>
                            </div>
                        </div>
                        <div className="mt-12 shadow-sm border rounded-lg">
                            <table className="w-full table-auto text-sm text-left">
                                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                                    <tr>
                                        <th className="py-3 px-6">Name Place</th>
                                        <th className="py-3 px-6">Description</th>
                                        <th className="py-3 px-6">Location</th>
                                        <th className="py-3 px-6">Price</th>
                                        <th className="py-3 px-6"></th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 divide-y">
                                    {
                                        tableItems.map((item: Place, idx) => (
                                            <>
                                                <tr key={idx}>
                                                    <td className="px-6 py-4 whitespace-break-spaces">{item.name}</td>
                                                    <td className="px-6 py-4 whitespace-break-spaces">{item.description}</td>
                                                    <td className="px-6 py-4 whitespace-break-spaces">{item.location}</td>
                                                    <td className="px-6 py-4 whitespace-break-spaces">{item.price}</td>
                                                    <td className="text-right px-6 whitespace-nowrap flex justify-center items-center flex-col">
                                                        <Link
                                                            className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                                                            to={`/places/edit/${item.id}`}>
                                                            Edit
                                                        </Link>
                                                        <DeleteModal handleFunction={() => handleDelete(item.id)} />
                                                    </td>
                                                </tr>

                                            </>
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

export default PlacePage