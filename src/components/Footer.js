import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScaleBalanced } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Be a part of the
            </p>
            <p className="footer-subscription-heading-title">
                Havendale University Newsletter
            </p>
            <p className="footer-subscription-heading-bottom">
                to receive updates on upcoming events
            </p>
            
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email"
                     className="footer-input" />
                     <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
            <p className="footer-subscription-text">
                You can unsubscribe at anytime.
            </p>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
            </div>
                <div class='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className="social-logo">
                    HAVENDALE <i className='footer-icon'><FontAwesomeIcon icon={faScaleBalanced}/></i>
                    </Link>
                </div>
                <small className="website-rights">AG Copyright 2023</small>
                <div className="social-icons">
                    <Link to='/' target='_blank' aria-label='Facebook' className="social-icon-link">
                    <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link to='/' target='_blank' aria-label='Instagram' className="social-icon-link">
                    <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link to='/' target='_blank' aria-label='Linkedin' className="social-icon-link">
                    <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer