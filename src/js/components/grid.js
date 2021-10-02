import { useState, useEffect } from "react";
import Square from "./square";

const Grid = ({ player }) => {
  const [run, setRun] = useState(false);
  const [winner, setWinner] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [sqr, setSqr] = useState(new Array(9).fill(null));

  const winVal = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const checkWinner = () => {
    let winResult = null;
    winVal.forEach((e) => {
      if (sqr[e[0]] === sqr[e[1]] && sqr[e[1]] === sqr[e[2]]) {
        winResult = player[sqr[e[0]]];
      }
    });
    if (winResult === null && sqr.filter((e) => e !== null).length === 9) {
      winResult = "no Winnner";
    }
    if (winResult !== null) setWinner(winResult);
  };

  useEffect(() => {
    if (!run) setRun(true);
    run && currentPlayer === "X"
      ? setCurrentPlayer("O")
      : setCurrentPlayer("X");
    checkWinner();
  }, [sqr]);
  return (
    <div className="gridContainer">
      {winner && (
        <div className="playerModal">
          <p>
            {winner === "no Winnner"
              ? "match draw"
              : `congratulations ${winner} won the game!`}
          </p>
          <button onClick={() => window.location.reload()}>Restart ?</button>
        </div>
      )}
      {sqr.map((e, i) => (
        <Square
          key={i}
          index={i}
          value={e}
          setValue={setSqr}
          playerCheck={currentPlayer}
        />
      ))}
    </div>
  );
};

export default Grid;
