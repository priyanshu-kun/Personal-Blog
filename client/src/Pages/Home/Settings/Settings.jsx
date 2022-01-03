import { useState } from "react"
import Sidebar from "../../../components/Sidebar/Sidebar"
import ProfilePic from "../../../assets/images/images.jpeg"
import "./Settings.css"

function Settings() {

    const [Edit, setEdit] = useState(false)


    function handleEditArea() {
        setEdit(!Edit);
    }



    return (
        <div className="settings">
            <div className="settingsWrapper">
                <h1 className="settingHeading"><span>Think about yourself</span> <span>🧐</span></h1>
                <div className={`settingContent ${Edit ? "activeEditFields" : "deactiveEditFields" }`}>
                    <div className="displayProfile">
                       <div><img src={ProfilePic} alt="profile page pic" /></div> 
                        <p className="username">@Username</p>
                        <p className="joiningInfo">🎉 Joined on 1 Jan 2021</p>
                        <button onClick={handleEditArea} className="editBtn">{!Edit ? <span>Edit</span> :<span>Close</span>} Profile</button>
                    </div>
                    {
                        Edit && (
                            <div className="editArea"> 
                                <div className="dangerArea">
                                    {/* <button>Logout</button> */}
                                    <button>Delete Account</button>
                                </div>
                                <div className="editFields">
                                   <div>
                                        <label htmlFor="username">@username</label>
                                        <input type="text" placeholder="@username" id="username"/>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" placeholder="jhonDoe@gmail.com" id="email"/>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" placeholder="stay strong" id="password"/>
                                    </div> 
                                </div>
                                <div>
                                    <button className="updateProfile">Update</button>
                                </div>
                            </div>
                        )
                    }

               </div>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
