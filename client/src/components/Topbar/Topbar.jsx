import React, { useState } from "react";
import Facebook from "../../assets/icons/facebook.svg"
import Instagram from "../../assets/icons/instagram.svg"
import Twitter from "../../assets/icons/twitter.svg"
import Search from "../../assets/icons/search.svg"
import X from "../../assets/icons/x.svg"
import Menu from "../../assets/icons/menu.svg"
import Linkdlin from "../../assets/icons/linkedin.svg"
import ProfilePic from "../../assets/images/images.jpeg"
import { Link } from "react-router-dom"
import "./Topbar.css"

import {useContext} from "react"
import {Context} from "../../context/Context"



export default function Topbar() {


  const {user, dispatch} = useContext(Context);
  const [SearchBar, setSearchBar] = useState(false);
  const [Drawer, setDrawer] = useState(false);
  const PE = "http://localhost:5000/images/"

  function handleSearchBar() {
    setSearchBar(!SearchBar);
  }


  function handleSetDrawer() {
    setDrawer(!Drawer)
  }


  function handleLogout() {
    dispatch({type: "LOGOUT"});
  }


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
                <button onClick={handleLogout}  className="logout">Log out</button>
              )
            }
          </li>
        </ul>
      </nav>
      <div className="topRight">
        {/* <label htmlFor="searchBar">Search for Something?</label> */}
        <img onClick={handleSetDrawer} className="hamburgerMenu" src={Menu} alt="menu" />
        <input id="searchbar" className={`searchBar ${SearchBar && "activeSearchBar"}`} type="text" placeholder="Search..." />
        <img onClick={handleSearchBar} src={SearchBar ? X : Search} className="searchIcon" alt="Search bar" />
        {
          user ? (
            <div className="profilePicRapper" >
              <Link to="/settings">
                <img className="profilePic" src={user.profilePic=== ""? PE+"default.png" : PE+user.profilePic} alt="profile" />
              </Link>
            </div>
          )
            :
            (
              <ul className="login-btn-ul">
                <li className="topListItem loginBtn">
                  <Link to="/login">
                    <button>LogIn</button>
                  </Link>
                </li>
              </ul>
            )
        }
      </div>
      <div className={`navigationDrawer ${Drawer ? "showNavigation": "hideNavigationDrawer"}`}>
        {/* <h1 style={{marginTop: "60px", color: "black"}} className={`test ${Drawer ? "showTest": "hideTest"}`}>I'm here for only test purpose:D</h1> */}
        <div className="mobileNavbarHeading">
          <input className={`searchBar mobileSearchBar `} type="text" placeholder="Search..." />
          {
            user ? (
              <div className="mobileProfileRappper" >
                <Link to="/settings">
                  <img className="profilePic" src={user.profilePic=== ""? PE+"default.png" : PE+user.profilePic} alt="profile" />
                </Link>
              </div>
            )
              :
              (
                <ul className="">
                  <li className="topListItem loginBtn">
                    <Link to="/login">
                      <button>LogIn</button>
                    </Link>
                  </li>
                </ul>
              )
          }
        </div>
        <div className=" mobileNavbarSocialIcons">
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
        <nav className="mobileNavbarNavLinks">
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
                  <button  onClick={handleLogout}  className="logout">Log out</button>
                )
              }
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
