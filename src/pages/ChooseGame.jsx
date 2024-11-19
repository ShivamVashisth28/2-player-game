import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RockPaperGame from './Games/RockPaperGame'
import Bounce from './Games/Bounce'
import Snake from './Games/Snake'
import Soccer from './Games/Soccer'
import Cricket from './Games/Cricket'
import Flappybird from './Games/Flappybird'
import Minesweeper from './Games/Minesweeper'


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
        {
            gameId["id"] == "soccer" ? <> <Soccer/> </> : null
        }
        {
            gameId["id"] == "cricket" ? <> <Cricket/> </> : null
        }
        {
            gameId["id"] == "flappybird" ? <> <Flappybird/> </> : null
        }
        {
            gameId["id"] == "minesweeper" ? <> <Minesweeper/> </> : null
        }
        
    </div>
  )
}

export default ChooseGame