import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (

    <div>
      <div>Smashers</div>
      <div className="border-black border-2 w-[5em] m-20">
        <button
          onClick={() => {
            navigate("/game");
          }}
          className="text-2xl text-red-600"
        >
          Game
        
        </button>
      </div>
    </div>
  );
}

export default Home;
