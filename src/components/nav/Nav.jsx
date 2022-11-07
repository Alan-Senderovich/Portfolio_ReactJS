import React, {useState} from "react";
import "./nav.css";
import {AiOutlineHome} from "react-icons/ai";
import {BiUser} from "react-icons/bi"
import {BiBook} from "react-icons/bi";
import {RiGalleryLine} from "react-icons/ri";
import {BiMessageRoundedDots} from "react-icons/bi";



const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return <nav>
    <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}>
      <AiOutlineHome />
    </a>
    <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}>
      <BiUser />
    </a>
    <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}>
      <BiBook />
    </a>
    <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "active" : ""}>
      <RiGalleryLine />
    </a>
    <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}>
      <BiMessageRoundedDots />
    </a>
  </nav>;
};

export default Nav;
