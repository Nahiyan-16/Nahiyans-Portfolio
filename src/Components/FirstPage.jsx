import React from "react"
import {useSpring, animated} from "react-spring"
import Navbar from './Navbar'
import Links from './Links'

import linkedInLogo from '../images/linkedin.png'
import githubLogo from '../images/github.png'
import instaLogo from '../images/insta.png'
import youtubeLogo from '../images/youtube.png'

export default function FirstPage(){
    const style1 = useSpring({from: {opacity: 0},to:{opacity: 1},delay: 300,config: {duration: 2000}})
    const style2 = useSpring({from: {opacity: 0},to:{opacity: 1},delay: 1500,config: {duration: 2000}})
    const style3 = useSpring({from: {opacity: 0},to:{opacity: 1},delay: 2900,config: {duration: 2000}})
    const style4 = useSpring({from: {opacity: 0},to:{opacity: 1},delay: 4500,config: {duration: 2000}})
    return (
        <div className="FirstPageContainer" id="title">
            <div>
                <Navbar />
                    <div class="mainContainer">
                        <div class="mainDesc">
                        <div class="mainBodyText">
                            <animated.div style={style1}>
                                <div id="mainBodyTextOne">Hi there!</div>
                            </animated.div>
                            <animated.div style={style2}>
                                <div id="mainBodyTextTwo">I'm <a href="#about" id="name">Nahiyan</a></div>
                                <div id="mainBodyTextThree">a Web Developer</div>
                            </animated.div>
                        </div>
                        <animated.div style={style3}>
                            <div class="mainBodySubtext">
                                <p>I'm extremely passionate about creating and delivering
                                    interactive applications along with a smooth user
                                    web experiences </p>
                            </div>
                        </animated.div>
                        <animated.div style={style4}>
                            <div class="personalLinks">
                                <Links 
                                    link = 'https://www.linkedin.com/in/nahiyanahmed/'
                                    source = {linkedInLogo}
                                    alternative = 'LinkedIn Logo'
                                    width = '26px'
                                />
                                <Links 
                                    link = 'https://github.com/Nahiyan-16/'
                                    source = {githubLogo}
                                    alternative = 'Github Logo'
                                    width = '25px'
                                />
                                <Links 
                                    link = 'https://www.instagram.com/nahiyan16/'
                                    source = {instaLogo}
                                    alternative = 'Instagram Logo'
                                    width = '24px'
                                />
                                <Links 
                                    link = 'https://www.youtube.com/channel/UC9zr1Q2LtQtxtlKc45P7kMA'
                                    source = {youtubeLogo}
                                    alternative = 'Youtube Logo'
                                    width = '26px'
                                />
                            </div>
                        </animated.div>
                    </div>
                </div>
            </div>
        </div>
    )
}