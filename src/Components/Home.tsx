import React, { useState } from "react";
import "./Home.css";
import { colors, board, chess } from "./methods";


function Home() {

  const [positions, setPositions] = useState<(number | undefined)[]>([])
  const [knight, Setknight] = useState<number>(58)
  const[select, Setselect]=useState<string>("")

  const possiblePosition = (value: number) => {

    let rowind = 0
    let ind = 0
    board.forEach((val, index) => {
      if (val.includes(value)) {
        rowind = index
        ind = val.indexOf(value)
      }
    })

    const a = rowind - 2 < 0 || rowind - 2 > 7 ? undefined : rowind - 2
    const b = rowind - 1 < 0 || rowind - 1 > 7 ? undefined : rowind - 1
    const c = rowind + 2 < 0 || rowind + 2 > 7 ? undefined : rowind + 2
    const d = rowind + 1 < 0 || rowind + 1 > 7 ? undefined : rowind + 1

    setPositions([
      a !== undefined ? board[rowind - 2][ind - 1] : undefined,
      b !== undefined ? board[rowind - 1][ind - 2] : undefined,
      a !== undefined ? board[rowind - 2][ind + 1] : undefined,
      b !== undefined ? board[rowind - 1][ind + 2] : undefined,
      d !== undefined ? board[rowind + 1][ind + 2] : undefined,
      c !== undefined ? board[rowind + 2][ind + 1] : undefined,
      d !== undefined ? board[rowind + 1][ind - 2] : undefined,
      c !== undefined ? board[rowind + 2][ind - 1] : undefined
    ])
  }

  const handleClick = (value: number) => {
    if (value === knight) {
      possiblePosition(value)
      Setselect("select")
    } else if (positions.includes(value)) {
      Setknight(value)
      setPositions([])
      Setselect("")
    } else {
      setPositions([])
      Setselect("")
    }
  }

  return (
    <>
      <div className="board">
        {chess.map((item, index) => {
          return (
            <div style={{"position":"relative"}} onClick={() => handleClick(item)} key={index} className={`${colors[index]} ${positions.includes(item) && "positions"} ${item===knight&&select}`}>
              {item===knight&&<img className="knight" src={require("./knight.png")} alt="" />}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home;