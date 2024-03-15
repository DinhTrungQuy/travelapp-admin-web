import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File>();
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [popular, setPopular] = useState(true);
  const [recommended, setRecommended] = useState(true);
  const [direction, setDirection] = useState(0);
  const nav = useNavigate();


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image)
      return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("price", price.replace(/[^0-9.]/g, ''));
    formData.append("image", image);
    formData.append("popular", popular ? "true" : "false");
    formData.append("recommended", recommended ? "true" : "false");
    formData.append("direction", direction.toString());


    console.log(formData)
    axios
      .post("https://quydt.speak.vn/api/place", formData, {
        withCredentials: true,
        "headers": {
          "Content-Type": "multipart/form-data",
        }
      })
      .then((response) => {
        console.log(response)
        nav("/resources");
      })
      .catch((err) => console.log(err));
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9.]/g, '');
    value = value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    value = value.replace(/\./g, '');
    e.target.value = value;
    setPrice(e.target.value)
  }

  return (
    <main className="relative py-14 bg-gray-900">
      <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Create Place
          </p>
          <p className="text-gray-300">
            We’d love to hear from you! Please fill out the form bellow.
          </p>
        </div>
        <div className="mt-8 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
          <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
            <div>
              <label className="font-medium">Name Place</label>
              <input
                value={name}
                type="text"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div>
              <label className="font-medium">Location</label>
              <input
                value={location}
                type="text"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                onChange={(e) => {
                  setLocation(e.target.value);
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
                  handlePriceChange(e)
                }}
              />
            </div>
            <div>
              <label className="font-medium">Direction</label>
              <select className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                onChange={(e) => {
                  setDirection(parseInt(e.target.value));
                }}
              >
                <option value="0">Miền Bắc</option>
                <option value="1">Miền Trung</option>
                <option value="2">Miền Nam</option>
              </select>
            </div>
            <div>
              <label className="font-medium">Popular</label>
              <select className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                onChange={(e) => {
                  setPopular(e.target.value ? true : false);
                }}
              >
                <option value="true">True</option>
                <option value="">False</option>
              </select>

            </div>
            <div>
              <label className="font-medium">Recommended</label>
              <select className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                onChange={(e) => {
                  setRecommended(e.target.value ? true : false);
                }}
              >
                <option value="true">True</option>
                <option value="">False</option>
              </select>
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
export default AddPage;
