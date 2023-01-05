import React from "react"
import Logo from "../images/icon.png"

export default function Navbar(){
    return (
        <div class="center">
            <div class="headerContainer">
                <div class="logo">
                    <a href="#title"><img src={Logo} alt="logo" id="logoImg" /></a>
                </div>
                <div class="nav">
                    <ul class="navList">
                        <li class="navItem"><a href="#projects">PROJECTS</a></li>
                        <li class="navItem"><a href="#about">ABOUT</a></li>
                        <li class="navItem"><a href="#contact">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}