import React from "react"
import HeaderImage from "../../assets/images/woman.png"
import IconDown from "../../assets/icons/chevron-down.svg"
import "./Header.css";

export default function Header() {
  return (
    <header className="header-section">
      <div className="header-style-object"></div>
      <div className="header-content-section">
        <div className="header-call-to-action-object">
          <p>Scroll down to read articles</p>
          <span className="icon-down"><img src={IconDown} alt="icon down" /></span>
        </div>
        <div className="header-style-image">
          <p>
            "A reader lives thousand lives before dies, The man who never reads lives only one."
          </p>
          <img src={HeaderImage} alt="Header image" />
        </div>
      </div>
    </header>
  )
}

