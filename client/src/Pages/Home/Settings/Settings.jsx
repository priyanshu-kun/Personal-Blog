import { useState, useContext } from "react"
import Sidebar from "../../../components/Sidebar/Sidebar"
import ProfilePic from "../../../assets/images/images.jpeg"
import { Context } from "../../../context/Context"
import EditPic from "../../../assets/icons/editpic.svg"
import axios from "axios"
import "./Settings.css"



function Settings() {

    const PE = "http://localhost:5000/images/"
    const [Edit, setEdit] = useState(false)
    const {user, dispatch} = useContext(Context);
    const initialState = {
        username: user.username,
        email: user.email,
        password: ""
    }

    const [updateUser, setUpdateUser] = useState(initialState);
    const [file,setFile] = useState(null);

    function handleEditArea() {
        setEdit(!Edit);
    }



    function handleInputChange(e) {
        setUpdateUser({...updateUser, [e.target.name]: e.target.value});
    }


    async function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: "UPDATE_START"});
        try {
            const updatedUserData = {
                userId: user._id,
                username:  updateUser.username,
                email: updateUser.email,
                password: updateUser.password
            }
            if(file) {
                const data = new FormData();
                const filename = Date.now()+file.name;
                data.append("name",filename);
                data.append("file", file);
                updatedUserData.profilePic = filename
                try {
                    await axios.post("/upload", data);
                }
                catch(e) {
                    console.log("Failed to upload file!");
                }
            }
            console.log(updatedUserData)
            const res = await axios.put("/user/"+user._id, updatedUserData)
            dispatch({type: "UPDATE_SUCCESS", payload: res.data});
            setUpdateUser(initialState);
            alert("Profile has been updated successfully!")
        }
        catch(e) {
            dispatch({type: "UPDATE_FAILURE"});
            console.log(e.message)
        }
    }


    async function handleDeleteAccount() {
        
        try {
            const res = await axios.delete("/user/"+user._id, {data: {userId: user._id}})
            dispatch({type: "LOGOUT"});
            window.location.replace("/") 
        }
        catch(e) {
            console.log(e.message);
        }

    }


    return (
        <div className="settings">
            <div className="settingsWrapper">
                <h1 className="settingHeading"><span>Think about yourself</span> <span>🧐</span></h1>
                <div className={`settingContent ${Edit ? "activeEditFields" : "deactiveEditFields" }`}>
                    <div className="displayProfile">
                        <div className="profilePicWrapper">
                            <img src={file ? URL.createObjectURL(file): user.profilePic === "" ? PE+"default.png" : PE+user.profilePic } alt="profile page pic" />
                            <label class="custom-file-upload-2">
                                <input onChange={(e) => (setFile(e.target.files[0]))} type="file" className="addCoverImageBtn" />
                                <img src={EditPic} alg="edit image" />
                            </label>
                        </div> 
                        <p className="username">@{user?.username}</p>
                        <p className="joiningInfo">🎉 Joined on {new Date(user?.createdAt).toDateString()}</p>
                        <button onClick={handleEditArea} className="editBtn">{!Edit ? <span>Edit</span> :<span>Close</span>} Profile</button>
                    </div>
                    {
                        Edit && (
                            <form className="editArea" > 
                                <div className="dangerArea">
                                    {/* <button>Logout</button> */}
                                    <button onClick={handleDeleteAccount}>Delete Account</button>
                                </div>
                                <div className="editFields">
                                   <div>
                                        <label htmlFor="username">@username</label>
                                        <input onChange={handleInputChange} type="text" placeholder="@username" value={updateUser.username} name="username" id="username"/>
                                        <label htmlFor="email">Email</label>
                                        <input onChange={handleInputChange} type="email" placeholder="jhonDoe@gmail.com" value={updateUser.email} name="email" id="email"/>
                                        <label htmlFor="password">Password</label>
                                        <input onChange={handleInputChange} type="password" placeholder="stay strong" value={updateUser.password} name="password" id="password"/>
                                    </div> 
                                </div>
                                <div>
                                    <button onClick={handleSubmit} className="updateProfile">Update</button>
                                </div>
                            </form>
                        )
                    }

               </div>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
