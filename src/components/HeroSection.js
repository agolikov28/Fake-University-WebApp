import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="videos copy/campus-video-1.mp4" autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <h2>AT HAVENDALE</h2>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
            <Button className='btns'buttonStyle='btn--outline'
            buttonSize='btn--large'>
                GET STARTED
            </Button>
            <Button className='btns'buttonStyle='btn--primary'
            buttonSize='btn--large'>
                STUDENT LOGIN <FontAwesomeIcon icon={faRightToBracket} />
            </Button>
        </div>

    </div>
  )
}

export default HeroSection