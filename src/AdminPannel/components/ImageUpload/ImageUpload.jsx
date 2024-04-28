
import {useState} from "react"

const ImageUpload = () => {
    const [image, setImage]=useState("")
    // const [cat, setCat]= useState("")

    const handleChange=(e)=>{
        setImage(e.target.files[0])
    }
  
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData= new FormData()
        formData.append("image", image)
        // formData.append("message", JSON.stringify(cat))
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" id="" onChange={handleChange}/>
            {/* <input type="text" onChange={e=>setCat(e.target.value)} /> */}
            <button type="submit" >Submit</button>
        </form>
    );
};

export default ImageUpload;