import { useState } from "react";
import axios from "axios";

const EditPage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [level, setLevel] = useState("");
    const [price, setPrice] = useState(0);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/api/courses/store", {
                title,
                description,
                level,
                price,
                image_url: imageUrl,
            })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    };
    return (
        <main className="relative py-14 bg-gray-900">
            <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
                <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
                    <p className="text-white text-3xl font-semibold sm:text-4xl">
                        Create Course
                    </p>
                    <p className="text-gray-300">
                        We’d love to hear from you! Please fill out the form bellow.
                    </p>
                </div>
                <div className="mt-8 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
                    <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
                        <div>
                            <label className="font-medium">Title</label>
                            <input
                                value={title}
                                type="text"
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label className="font-medium">Level</label>
                            <input
                                value={level}
                                type="text"
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                onChange={(e) => {
                                    setLevel(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label className="font-medium">Price</label>
                            <input
                                value={price}
                                type="text"
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                onChange={(e) => {
                                    setPrice(parseInt(e.target.value));
                                }}
                            />
                        </div>
                        <div>
                            <label className="font-medium">Image Url</label>
                            <input
                                value={imageUrl}
                                type="text"
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                onChange={(e) => {
                                    setImageUrl(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <label className="font-medium">Description</label>
                            <textarea
                                value={description}
                                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            ></textarea>
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
export default EditPage;
