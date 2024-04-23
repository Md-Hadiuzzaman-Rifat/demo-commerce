// /* eslint-disable no-unused-vars */
// import axios from "axios";
// import { useEffect, useState } from "react";

// function Test() {
//   const [file, setFile] = useState();
//   const [name, setName] = useState("");
//   const [find, setFind] = useState(null);

//   const upload = () => {
//     const formData = new FormData();
//     formData.append("file", file);
//     axios
//       .post("http://localhost:20200/upload", formData)
//       .then((res) => {})
//       .catch((er) => console.log(er));
//   };

//   useEffect(() => {
//     fetch(`http://localhost:20200/get-upload`)
//       .then((res) => res.json())
//       .then((data) => setFind(data));
//   }, []);

//   console.log(find);

//   return (
//     <div>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <input type="text" onChange={(e) => setName(e.target.value)} />
//       <button type="button" onClick={upload}>
//         Upload
//       </button>
//       <div>
//         {setFind &&
//           find?.map((item) => (
//             <img
//               key={item._id}
//               src={`http://localhost:20200/images/${item.image}`}
//               alt=""
//             />
//           ))}
//       </div>
//     </div>
//   );
// }

// export default Test;

// <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
// <div className="text-center">
//   <FaImage></FaImage>

//   <div className="mt-4 flex text-sm leading-6 text-gray-600">
//     <label
//       htmlFor="file-upload"
//       className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//     >
//       <span>Upload a photo</span>
//       <input
//         id="file-upload"
//         name="file-upload"
//         type="file"
//         className="sr-only"
//       />
//     </label>

//   </div>

// </div>
// </div>

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/