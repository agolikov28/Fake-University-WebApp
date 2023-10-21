import React from 'react'
import '../../App.css'
import CSV from '../CSV';


function Academics () {
    return(
        <>
        <div className="academics"style={{textAlign: 'center', paddingBottom: '400px', paddingTop: '400px', display: 'block'}}>
        <h1 style={{marginBottom: '24px'}}>Schools and Programs</h1>
        <p style={{fontSize: '30px'}}>Havendale has something for every type of student</p>
        </div>
        <CSV/>
        </>
    )
}

export default Academics;