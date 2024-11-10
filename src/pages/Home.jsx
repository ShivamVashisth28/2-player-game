import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div>Home</div>
      <div className="border-black border-2 w-14 m-20">
        <button
          onClick={() => {
            navigate("/game");
          }}
        >
          Game
        </button>
      </div>
    </div>
  );
}

export default Home;
