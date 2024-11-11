import React from 'react'
import { useNavigate } from "react-router-dom";

function Game() {
  const navigate = useNavigate();
  return (
    <div className='h-screen w-screen flex-col items-center '>
      <div>
          <div onClick={()=>{
              navigate("/rps")
          }}>Rock Paper Scissor Game</div>
      </div>
      <div>
          <div onClick={()=>{
              navigate("/rps")
          }}>Rock Paper Scissor Game</div>
      </div>
      <div>
          <div onClick={()=>{
              navigate("/rps")
          }}>Rock Paper Scissor Game</div>
      </div>
    </div>
  )
}

export default Game