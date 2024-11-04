import React, { useState } from 'react'
import { FaAngleDoubleRight,FaAngleDoubleLeft } from "react-icons/fa";
import './Card.css'

export default function Card({spanishLeagueData}) {

    const [index,setIndex] = useState(0);

    function leftBtnHandler() {
        if(index===0) {
            setIndex(spanishLeagueData.length-1);
        }
        else {
            setIndex(index-1);
        }
    }

    function rightBtnHandler() {
        if(index==spanishLeagueData.length-1) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }
    }

    function randomBtnHandler() {
        let randomIndex = Math.floor(Math.random()*spanishLeagueData.length);
        setIndex(randomIndex);
    }

  return (
    <div className='card'>
        <div className='cardi'>

            <div className='logocontainer'>
                <img src={spanishLeagueData[index].league_logo} alt="" height="200px"/>
            </div>

            <div>
                <div className='leaguename'>{spanishLeagueData[index].league_id}.{spanishLeagueData[index].league_name}</div>
            </div>
            
        </div>
        <div className='cardii'>
            <div className='leftrightbtn'>
                <button onClick={leftBtnHandler}><FaAngleDoubleLeft/></button>
                <button onClick={rightBtnHandler}><FaAngleDoubleRight/></button>
            </div>
            <button onClick={randomBtnHandler}>Random</button>
        </div>
    </div>
  )
}
