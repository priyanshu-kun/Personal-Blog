import {useContext, useState} from "react"
import "./Write.css"
import x from "../../assets/icons/x.svg"
import {Context} from "../../context/Context"
import axios from "axios"

const initialState = {
    title: "",
    desc: "",
}

function Write() {

    const [writeContent, setWriteContent] = useState(initialState);
    const [file,setFile] = useState(null);
    const {user} = useContext(Context)


    function handleInputChange(e) {
        setWriteContent({...writeContent, [e.target.name]: e.target.value});
    }


    async function handleSubmit(e) {
       e.preventDefault(); 
        try {
            const newPost = {
                username: user.username,
                title: writeContent.title,
                desc: writeContent.desc,
            }

            if(file) {
                const data = new FormData();
                const filename = Date.now()+file.name;
                data.append("name",filename);
                data.append("file", file);
                newPost.photo = filename
                try {
                    await axios.post("/upload", data);
                }
                catch(e) {
                    console.log("Failed to upload file!");
                }
            }

            const res = await axios.post("/post", newPost)
            console.log(res.data);
            window.location.replace("/post/"+res.data._id)
        }
        catch(e) {
            console.log(e)
        }
    }


    return (
        <div className="write">
            <h1>Share your thoughts 🗿</h1>
            <form className="writeArea" onSubmit={handleSubmit} >
                <div className="writeActionsBtns">
                    <div className="editAndPreview">
                        <button className="customUnderline">Edit</button>
                        <button>Preview</button>
                    </div>
                    <div className="publishAndDiscard">
                        <button  type="submit" >Publish</button>
                        <button>Discard</button>
                    </div>
                </div>
                <div className="writeActionArea">
                    {
                        !file ? (
                            <label class="custom-file-upload">
                                <input onChange={(e) => (setFile(e.target.files[0]))} type="file" className="addCoverImageBtn" />
                                Upload file
                            </label>
                            
                        )
                        :
                        (
                           <div className="postBannerCover">
                                <img className="postBanner" src={URL.createObjectURL(file)} alt="banner" />
                               <button onClick={() => setFile(null)}><img src={x} alt="cut btn" /></button>
                            </div>
                        )
                    }
                    <input type="text" placeholder="Title" name="title" onChange={handleInputChange} value={writeContent.title} />
                    <hr />
                    <textarea name="desc" onChange={handleInputChange} value={writeContent.desc} placeholder="Tell your story..."></textarea>
                </div>
            </form>
        </div>
    )
}

export default Write
