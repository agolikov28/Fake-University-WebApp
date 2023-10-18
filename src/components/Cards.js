import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>What's new in the Havendale Community</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
            <ul className='cards__items'>
            <CardItem
              src='images copy/building-2.jpg'
              text='Upcoming Fall Open House scheduled for September 4th'
              label='Prospective Students'
              path='/events'
            />
            <CardItem
              src='images copy/building-3.jpg'
              text='Ten new majors will be put in place for the 2025-2026 school year'
              label='Academics'
              path='/academics'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images copy/walking-on-campus.jpg'
              text='Construction set to begin on the Chemistry Building in 2027'
              label='Campus News'
              path='/events'
            />
            <CardItem
              src='images copy/building-4.jpg'
              text='How the Havendale Community is Going Green'
              label='Campus News'
              path='/events'
            />
            <CardItem
              src='images copy/graduating-class.jpg'
              text='Find out why we are ranked #11 among public universities'
              label='Campus News'
              path='/events'
            />
          </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards