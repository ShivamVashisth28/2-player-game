import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RockPaperGame from './Games/RockPaperGame'
import Bounce from './Games/Bounce'
import Snake from './Games/Snake'


function ChooseGame() {
    
    const gameId = useParams()
        
  return (
    <div>
        {
            gameId["id"] == "snake" ? <> <Snake/> </> : null
        }
        {
            gameId["id"] == "bounce" ? <> <Bounce/> </> : null
        }
        {
            gameId["id"] == "rps" ? <> <RockPaperGame/> </> : null
        }
        
    </div>
  )
}

export default ChooseGame