import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



const EditBookingPage = () => {
    const [username, setUsername] = useState("");
    const [fullname, setFullname] = useState("");
    const [image, setImage] = useState<File>();
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");
    const nav = useNavigate();
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        axios.get(`https://quydt.speak.vn/api/booking/${id}`, {
            withCredentials: true,
        }).then(response => {
            console.log(response)
            setUsername(response.data.username);
            setFullname(response.data.fullname);
            setEmail(response.data.email);
            setPhone(response.data.phone);
            setRole(response.data.role);
        })
    }, [id]);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!image)
            return;

        const formData = new FormData();

        formData.append("username", username);
        formData.append("fullname", fullname);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("role", role);
        formData.append("image", image);


        console.log(formData)

        axios
            .put(`https://quydt.speak.vn/api/user/${id}`, formData, {
                withCredentials: true,
                "headers": {
                    "Content-Type": "multipart/form-data",
                }
            })
            .then((response) => {
                console.log(response)
                nav("/users");
            })
            .catch((err) => console.log(err));
    };

    return (
        <main className="relative py-14 bg-gray-900">
            <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
                <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
                    <p className="text-white text-3xl font-semibold sm:text-4xl">
                        Edit Place
                    </p>
                    <p className="text-gray-200">
                        Edit a place to share with everyone
                    </p>
                </div>
                <div className="mt-8 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
                    <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
                        <div>
                            <label className="font-medium">Username</label>
                            <input
                                value={username}
                                type="text"
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </div>

                        <div>
                            <label className="font-medium">Fullname</label>
                            <input
                                value={fullname}
                                type="text"
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                onChange={(e) => {
                                    setFullname(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label className="font-medium">Email</label>
                            <input
                                value={email}
                                type="text"
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label className="font-medium">Role</label>
                            <select className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                value={role}
                                onChange={(e) => {
                                    setRole(e.target.value);
                                }}
                            >
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                            </select>
                        </div>
                        <div>
                            <label className="font-medium">Phone number</label>
                            <input
                                value={phone}
                                type="text"
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label className="font-medium">Image</label>
                            <input
                                type="file"
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                onChange={(e) => {
                                    if (e.target.files)
                                        setImage(e.target.files[0]);
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div
                className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
                style={{
                    background:
                        "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
                }}
            ></div>
        </main>
    );
};
export default EditBookingPage;
