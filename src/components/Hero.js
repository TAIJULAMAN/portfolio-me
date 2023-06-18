import React from 'react'
import './Hero.css'

const Hero = () => {

    return (
        <div className='hero' id='home'>
            <h2 className='title'>hELLO. i aM PRANTOSH</h2>
            <h3 className='tagline'>Full-Stack Developer</h3>
            <p className='paragraph'>I'm passionate about crafting exceptional digital experiences. With a keyboard as my paintbrush and lines of code as my canvas, I bring ideas to life in the virtual realm. Let's join forces and bring your digital dreams to fruition. Get in touch, and let's embark on this exciting journey together!</p>
            <div className="hero-btns">
                <button className="hire-me">HIRE ME</button>
                <button className="lets-talk">LET'S TALK</button>
            </div>
            <div className="social-icons">
                <a href="https://github.com/PrantoshB" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/prantosh" target="_blank">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://wellfound.com/u/prantosh-biswas">
                    <i class="fab fa-angellist"></i>
                </a>
                <a href="https://www.twitter.com/prantalks" target="_blank">
                    <i class="fa-brands fa-twitter"></i>
                </a>
            </div>
        </div>
    )
}

export default Hero