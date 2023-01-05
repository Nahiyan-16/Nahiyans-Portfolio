import React from "react"
import {useSpring, animated} from "react-spring"
import Navbar from './Navbar'
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
                                <div id="mainBodyTextTwo">I'm <a href="#aboutMe" id="name">Nahiyan</a></div>
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
                                <div class="personalLinksLogo">                    
                                    <a href="https://www.linkedin.com/in/nahiyanahmed/">
                                        <img src={linkedInLogo} alt="LinkedIn Logo" style={{width: '26px' }}/>
                                    </a>
                                </div>
                                <div class="personalLinksLogo">                    
                                    <a href="https://github.com/Nahiyan-16/">
                                        <img src={githubLogo} alt="Github Logo" style={{width: '25px' }}/>
                                    </a>
                                </div>
                                <div class="personalLinksLogo">                    
                                    <a href="https://www.instagram.com/nahiyan16/">
                                        <img src={instaLogo} alt="Instagram Logo" style={{width: '24px' }} />
                                    </a>
                                </div>
                                <div class="personalLinksLogo">                    
                                    <a href="https://www.youtube.com/channel/UC9zr1Q2LtQtxtlKc45P7kMA">
                                        <img src={youtubeLogo} alt="Youtube Logo" style={{width: '26px' }} />
                                    </a>
                                </div>
                            </div>
                        </animated.div>
                    </div>
                </div>
            </div>
        </div>
    )
}