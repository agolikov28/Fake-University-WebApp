import React from 'react'
import './EmptyList.css'

function EmptyList() {
  return (
    <div className='emptyList-wrap'>
        <img style={{alignSelf: 'center'}} src="/videos copy/page-not-found.gif" alt="page not found" />
        <h2>Looks like there's nothing here...</h2>
    </div>
  )
}

export default EmptyList