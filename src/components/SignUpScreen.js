import React, { useState} from 'react'
import '../App.css'
import './SignUpScreen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Button } from './Button'

function SignUpScreen() {
  const [action,setAction] = useState('Login');

  return (
    <div className="container-signup">
      <div className="header-signup">
        <div className="text-signup">{action}</div>
        <div className="underline-under-text"></div>
      </div>
      <div className="credential-inputs">
        {action==="Login"?<div></div>:<div className="credential-inputs-input">
        <i class="icons-signup"><FontAwesomeIcon icon={faUser}/></i>
          <input type="text" placeholder='Username'/>
        </div>}
        
        <div className="credential-inputs-input">
        <i class="icons-signup"><FontAwesomeIcon icon={faEnvelope}/></i>
          <input type="email" placeholder='Email' />
        </div>
        <div className="credential-inputs-input">
        <i class="icons-signup"><FontAwesomeIcon icon={faLock}/></i>
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      {action==='Login'? <div className="forgot-password">Lost Password?<span> Click Here</span></div> : <div></div>}
      
      <div className="submit-container">
        <div className={action==='Login'?'submit gray':'submit'}  onClick={() => {setAction("Sign Up")}}>
            <Button buttonStyle='btn--primary' buttonSize='btn--medium'>
                Sign Up
            </Button>
          </div>
        <div className={action==='Sign Up'?'submit gray':'submit'}  onClick={() => {setAction("Login")}}>
            <Button buttonStyle='btn--primary' buttonSize='btn--medium'>
                Log In
            </Button>
          </div>
        </div>
    </div>
  )
}

export default SignUpScreen