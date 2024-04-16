import { useState } from "react";

const ImageUpload = () => {
    
    const [files, setFile] = useState([]);
    const [message, setMessage] = useState();

    const handleFile = (e) => {
        setMessage("");
        let file = e.target.files;

        for (let i = 0; i < file.length; i++) {
            const fileType = file[i]['type'];
            const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
            if (validImageTypes.includes(fileType)) {
                setFile([...files, file[i]]);
            } else {
                setMessage("only images accepted");
            }

        }
    }; 

    const removeImage = (i) => {
        setFile(files.filter(x => x.name !== i));
     }

     const handleImage=(e)=>{
        e.preventDefault()
        console.log(files);
     }


    return (
        <form onSubmit={handleImage}>
            <div className="flex justify-center h-screen items-center px-3">
                <div className="rounded-lg shadow-xl bg-gray-50 md:w-1/2 w-[360px]">
                    <div className="m-4">
                        <span className="flex justify-center items-center text-[12px] mb-1 text-red-500">{message}</span>
                        <div className="flex items-center justify-center w-full">
                            <label className="flex cursor-pointer flex-col w-full h-32 border-2 rounded-md border-dashed hover:bg-gray-100 hover:border-gray-300">
                                <div className="flex flex-col items-center justify-center pt-7">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fillRule="evenodd"
                                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                        Select a photo</p>
                                </div>
                                <input type="file" onChange={handleFile} className="opacity-0" multiple="multiple" name="files[]" />
                            </label>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">

                            {files.map((file, key) => {
                                return (
                                    <div key={key} className="overflow-hidden relative">
                                        <i onClick={() => { removeImage(file.name) }} className="mdi mdi-close absolute right-1 hover:text-white cursor-pointer"></i>
                                        <img className="h-20 w-20 rounded-md" src={URL.createObjectURL(file)} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
export default ImageUpload






// <div className="border-b border-gray-900/10 pb-12">
// <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//   <div className="col-span-full">
//     <label
//       htmlFor="cover-photo"
//       className="block text-sm font-medium leading-6 text-gray-900"
//     >
//       Cover photo
//     </label>
//     <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//       <div className="text-center">
//         <FaImage></FaImage>

//         <div className="mt-4 flex text-sm leading-6 text-gray-600">
//           <label
//             htmlFor="file-upload"
//             className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//           >
//             <span>Upload a file</span>
//             <input
//               id="file-upload"
//               name="file-upload"
//               type="file"
//               className="sr-only"
//             />
//           </label>
//           <p className="pl-1">or drag and drop</p>
//         </div>
//         <p className="text-xs leading-5 text-gray-600">
//           PNG, JPG, GIF up to 10MB
//         </p>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
