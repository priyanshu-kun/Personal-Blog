import React from "react";
import Facebook from "../../assets/icons/facebook.svg"
import Instagram from "../../assets/icons/instagram.svg"
import Twitter from "../../assets/icons/twitter.svg"
import Search from "../../assets/icons/search.svg"
import Linkdlin from "../../assets/icons/linkedin.svg"
import ProfilePic from "../../assets/images/images.jpeg"
import "./Topbar.css"


export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <div className="socialMediaIcons">
          <div className="socialIconsCover">
            <img src={Facebook} alt="Facebook" />
          </div>
          <div className="socialIconsCover">
            <img src={Instagram} alt="Instagram" />
          </div>
          <div className="socialIconsCover">
            <img src={Twitter} alt="Twitter" />
          </div>
          <div className="socialIconsCover">
            <img src={Linkdlin} alt="Linkdlin" />
          </div>
        </div> 
      </div>
      <nav className="topCenter">
        <ul>
          <li className="topListItem"><a href="">Home</a></li>
          <li className="topListItem"><a href="">About</a></li>
          <li className="topListItem"><a href="">Contact</a></li>
          <li className="topListItem"><a href="">Write</a></li>
          <li className="topListItem"><a href="">Logout</a></li>
        </ul>
      </nav>
      <div className="topRight">
        <label htmlFor="searchBar">Search for Something?</label>
        <input id="searchBar" type="text" placeholder="Search for Something?"/>
        <img src={Search} className="searchIcon" alt="Search bar" />
        <div className="profilePicRapper" >
            <img className="profilePic" src={ProfilePic} alt="profile" />
          </div>
      </div>
    </div> 
  )
}
