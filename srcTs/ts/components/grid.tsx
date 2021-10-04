import React from "react";
import { useState, useEffect } from "react";
import Square from "./square";
import { GridProps } from "../interface/game.interface";

const Grid = ({ player }: GridProps) => {
  const [run, setRun] = useState<boolean>(false);
  const [winner, setWinner] = useState<string>("");
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [sqr, setSqr] = useState<Array<"X" | "O" | null>>(
    new Array(9).fill(null)
  );

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
    let winResult: string | null = null;
    winVal.forEach((suit) => {
      const [a, b, c] = suit;
      if (sqr[a] !== null && sqr[a] === sqr[b] && sqr[b] === sqr[c]) {
        winResult = player[sqr[a] || "X"];
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
