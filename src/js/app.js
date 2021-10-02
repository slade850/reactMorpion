import React, { useState } from "react";
import Grid from "./components/grid";
import { useState } from "react";

const App = () => {
  const [player, setPlayer] = useState({});
  const [start, setStart] = useState(false);

  return (
    <>
      {!start && (
        <div className="playerModal">
          <div className="element">
            <label htmlFor="p1">Player one</label>
            <input
              type="text"
              name="p1"
              onChange={(e) => setPlayer((p) => ({ ...p, X: e.target.value }))}
            />
          </div>
          <div className="element">
            <label htmlFor="p2">Player Tow</label>
            <input
              type="text"
              name="p2"
              onChange={(e) => setPlayer((p) => ({ ...p, O: e.target.value }))}
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
