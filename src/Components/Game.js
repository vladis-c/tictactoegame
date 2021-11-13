import React, { useState } from "react"
import { calculateWinner } from "../helpers"
import Board from "./Board"

const styles = {
  width: "200px",
  margin: "20px auto",
}

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(board)

  function handleClick(i) {
    const boardCopy = [...board]
    if (winner || boardCopy[i]) return
    boardCopy[i] = xIsNext ? "X" : "O"
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
  }

  function computerMove() {
    return "O"
    /* Function for AI move (not ready) */
  }

  /* CHAGNE STYLING */

  function newGame() {
    return (
      <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
    )
  }

  return (
    <div>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? "winner: " + winner
            : "next player: " + (xIsNext ? "X" : computerMove())}
          {newGame()}
        </p>
      </div>
    </div>
  )
}

export default Game
