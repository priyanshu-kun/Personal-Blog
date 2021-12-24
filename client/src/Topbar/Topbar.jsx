import React from "react";
import Facebook from "../assets/icons/facebook.svg"
import Instagram from "../assets/icons/instagram.svg"
import Twitter from "../assets/icons/twitter.svg"
import Search from "../assets/icons/search.svg"
import Linkdlin from "../assets/icons/linkedin.svg"
import ProfilePic from "../assets/images/images.jpeg"
import "./Topbar.css"


export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <div className="socialMediaIcons">
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Twitter} alt="Twitter" />
          <img src={Linkdlin} alt="Linkdlin" />
        </div> 
      </div>
      <div className="topCenter">
        <ul>
          <li className="topListItem"><a href="">Home</a></li>
          <li className="topListItem"><a href="">About</a></li>
          <li className="topListItem"><a href="">Contact</a></li>
          <li className="topListItem"><a href="">Write</a></li>
          <li className="topListItem"><a href="">Logout</a></li>
        </ul>
      </div>
      <div className="topRight">
        <input type="text" placeholder="Search for Something?"/>
        <img src={Search} className="searchIcon" alt="Search" />
        <div className="profilePicRapper" >
            <img className="profilePic" src={ProfilePic} alt="profile" />
          </div>
      </div>
    </div>
  )
}
