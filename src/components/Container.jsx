import './Container.css';
import Card from './Card';

import React from 'react'

export default function Container({spanishLeagueData}) {
  return (
    <div className='container'>
        <Card spanishLeagueData={spanishLeagueData}></Card>
    </div>
  )
}
