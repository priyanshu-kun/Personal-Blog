import React, { useState } from "react";
import Facebook from "../../assets/icons/facebook.svg"
import Instagram from "../../assets/icons/instagram.svg"
import Twitter from "../../assets/icons/twitter.svg"
import Search from "../../assets/icons/search.svg"
import X from "../../assets/icons/x.svg"
import Linkdlin from "../../assets/icons/linkedin.svg"
import ProfilePic from "../../assets/images/images.jpeg"
import { Link } from "react-router-dom"
import "./Topbar.css"


export default function Topbar() {


  const [SearchBar, setSearchBar] = useState(false)

  function handleSearchBar() {
    setSearchBar(!SearchBar);
  }

  let user = true;

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
          <li className="topListItem">
            <Link to="/">Home</Link>
          </li>
          <li className="topListItem">
            <Link to="/">About</Link>
          </li>
          <li className="topListItem">
            <Link to="/">Contact</Link>
          </li>
          <li className="topListItem">
            <Link to="/write">Write</Link>
          </li>
          <li className="topListItem">
            {
              user && (
                <button className="logout">Log out</button>
              )
            }
          </li>
        </ul>
      </nav>
      <div className="topRight">
        {/* <label htmlFor="searchBar">Search for Something?</label> */}
        {
          SearchBar && (
            <input id="searchbar" className={!user && "additionalPadding"} type="text" placeholder="Search..." />
          )
        }
        {
          <img onClick={handleSearchBar} src={SearchBar? X: Search} className="searchIcon" alt="Search bar" />
        }
        {
          user ? (
            <div className="profilePicRapper" >
             <Link to="/settings">
                <img className="profilePic" src={ProfilePic} alt="profile" />
             </Link> 
            </div>
          )
            :
            (
              <ul>
                <li className="topListItem loginBtn">
                  <Link to="/login">
                    <button>LogIn</button>
                  </Link>
                </li>
              </ul>
            )
        }
      </div>
    </div>
  )
}
