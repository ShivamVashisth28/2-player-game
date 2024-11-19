import React from 'react'
import { useNavigate } from "react-router-dom";

function Game() {
  const navigate = useNavigate();

  const gameList = [
    {
      name : 'Rock Paper Scissor',
      link : "/game/rps",
    },
    {
      name : 'Snake',
      link : "/game/snake",
    },
    {
      name : 'Bounce',
      link : "/game/bounce",
    },
    {
      name : 'Minesweeper',
      link : "/game/minesweeper",
    },
    {
      name : 'Flappy bird',
      link : "/game/flappybird",
    },
    {
      name : 'Cricket',
      link : "/game/cricket",
    },
    {
      name : 'Soccer',
      link : "/game/soccer",
    },

  ]

  return (
    <div className='h-screen w-screen '>
      <div className='flex flex-col items-center pt-10 gap-[2vh]'>
          {
            gameList.map((game, index) => 
                  <div 
                    className='bg-red-300 w-1/3 p-2 text-center text-2xl border-2 border-black rounded-md hover:scale-110 hover:cursor-pointer transition hover:font-bold'
                    onClick={ () => { navigate(game.link) }} 
                  >
                    {game.name}
                  </div>
            )
          }
      </div>
    </div>
  )
}

export default Game