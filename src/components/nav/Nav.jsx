import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {BiUserCircle} from 'react-icons/bi'
import {BiMessageDetail} from 'react-icons/bi'
import {FaUserGraduate} from 'react-icons/fa';
import {GiLaptop} from 'react-icons/gi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "active" : ""}><GoHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><BiUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><GiLaptop/></a>
      <a href="#education" onClick={() => setActiveNav("#education")} className={activeNav === "#education" ? "active" : ""}><FaUserGraduate/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageDetail/></a>
  </nav>
  )
}

export default Nav


/*
    <nav>
        <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><GoHome/></a>
        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><BiUserCircle/></a>
        <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><CgFileDocument/></a>
        <a href="#education" onClick={() => setActiveNav("#education")} className={activeNav === "#education" ? "active" : ""}><VscMortarBoard/></a>
        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessage/></a>
    </nav>
*/