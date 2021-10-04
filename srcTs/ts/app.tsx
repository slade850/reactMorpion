import React, { useState } from "react";
import Grid from "./components/grid";
import { PlayerObject } from "./interface/game.interface";

const App = () => {
  const [player, setPlayer] = useState<PlayerObject>({ X: "", O: "" });
  const [start, setStart] = useState<boolean>(false);

  return (
    <>
      {!start && (
        <div className="playerModal">
          <div className="element">
            <label htmlFor="p1">Player one</label>
            <input
              type="text"
              name="p1"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPlayer((p) => ({ ...p, X: e.target.value }))
              }
            />
          </div>
          <div className="element">
            <label htmlFor="p2">Player Tow</label>
            <input
              type="text"
              name="p2"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPlayer((p) => ({ ...p, O: e.target.value }))
              }
            />
          </div>
          <button onClick={() => setStart(true)}>Start</button>
        </div>
      )}
      {start && <Grid player={player} />}
    </>
  );
};

export default App;
