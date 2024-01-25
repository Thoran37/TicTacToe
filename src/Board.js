import React, { useEffect, useState, useContext } from 'react'
import './App.css'
import { PointsContext } from './PointsContext'

export default function Board(props) {

  let [pt, setPt] = useContext(PointsContext)
  let initialValues = ['', '', '', '', '', '', '', '', '']
  let [cell, setCell] = useState(initialValues)
  let [turn, setTurn] = useState(0)
  let [colour, setColour] = useState(['', '', '', '', '', '', '', '', ''])
  function add(cellno) {
    let present = turn === 1 ? 'X' : 'O'
    if (present === 'X')
      colour[cellno] = "#D4D925"
    else
      colour[cellno] = "#F58840"
    console.log(cell[cellno])
    if (winner !== '');
    else if (cell[cellno] === '') {
      cell[cellno] = present
      setTurn(turn === 0 ? 1 : 0)
    }
    else
      alert("Select a valid cell")
  }
  let [winner, setWinner] = useState('')
  let a = pt[0], b = pt[1]
  useEffect(() => {
    function checkRow() {
      for (let i = 0; i < 7; i += 3) {
        let res = cell[i] === cell[i + 1] && cell[i] === cell[i + 2] && cell[i] !== ''
        if (res === true) {
          if (cell[i] === 'X') {
            setWinner('Player-1 Wins!!')
            a++;
          }
          else {
            setWinner('Player-2 Wins!!')
            b++;
          }
        }
      }
    }
    function checkColumn() {
      for (let i = 0; i < 3; i++) {
        let res = cell[i] === cell[i + 3] && cell[i] === cell[i + 6] && cell[i] !== ''
        if (res === true) {
          if (cell[i] === 'X') {
            setWinner('Player-1 Wins!!')
            a++;
          }
          else {
            setWinner('Player-2 Wins!!')
            b++;
          }
        }
      }
    }
    function checkDiagonal() {
      let res1 = cell[0] === cell[4] && cell[4] === cell[8] && cell[0] !== ''
      let res2 = cell[2] === cell[4] && cell[4] === cell[6] && cell[2] !== ''
      if (res1 === true) {
        if (cell[0] === 'X') {
          setWinner('Player-1 Wins!!')
          a++;
        }
        else {
          setWinner('Player-2 Wins!!')
          b++;
        }
      }
      else if (res2 === true) {
        if (cell[2] === 'X') {
          setWinner('Player-1 Wins!!')
          a++;
        }
        else {
          setWinner('Player-2 Wins!!')
          b++;
        }
      }
    }
    function checkTie() {
      let cnt = 0
      cell.forEach(ele => {
        if (ele === 'X' || ele === 'O')
          cnt++;
      })
      if (cnt === 9)
        setWinner('Tie Match - Fret Not!!')
    }
    checkTie()
    checkColumn()
    checkDiagonal()
    checkRow()
  })
  function reset() {
    window.location.reload()
  }
  function clear() {
    setCell(initialValues)
    setPt([a, b])
    setWinner('')
    setColour(['', '', '', '', '', '', '', '', ''])
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex flex-wrap w-50 justify-content-center' style={{ height: "60vh", color: "#DA0C81" }}>
          <div className="field border-start-0 border-top-0" onClick={() => add(0)}><h1 className='display-1' style={{ color: colour[0] }}>{cell[0]}</h1></div>
          <div className="field border-top-0 border-start-0 border-end-0" onClick={() => add(1)}><h1 className='display-1' style={{ color: colour[1] }}>{cell[1]}</h1></div>
          <div className="field border-end-0 border-top-0" onClick={() => add(2)}><h1 className='display-1' style={{ color: colour[2] }}>{cell[2]}</h1></div>
          <div className="field border-start-0 border-top-0 border-bottom-0" onClick={() => add(3)}><h1 className='display-1' style={{ color: colour[3] }}>{cell[3]}</h1></div>
          <div className="field border-0" onClick={() => add(4)}><h1 className='display-1' style={{ color: colour[4] }}>{cell[4]}</h1></div>
          <div className="field border-end-0 border-top-0 border-bottom-0" onClick={() => add(5)}><h1 className='display-1' style={{ color: colour[5] }}>{cell[5]}</h1></div>
          <div className="field border-start-0 border-bottom-0" onClick={() => add(6)}><h1 className='display-1' style={{ color: colour[6] }}>{cell[6]}</h1></div>
          <div className="field border-bottom-0 border-end-0 border-start-0" onClick={() => add(7)}><h1 className='display-1' style={{ color: colour[7] }}>{cell[7]}</h1></div>
          <div className="field border-bottom-0 border-end-0" onClick={() => add(8)}><h1 className='display-1' style={{ color: colour[8] }}>{cell[8]}</h1></div>
        </div>
        {winner !== '' ? <div className='d-flex bg-opacity-75 position-absolute top-50 start-50 translate-middle p-4 flex-column w-25 h-25 align-items-center' style={{ backgroundColor: "#B9B4C7", color: "#016A70" }}>
          <h2 className='text-center'>{winner}</h2>
          <div className='row'>
            <button className='btn col m-2' style={{ backgroundColor: "#D2DE32" }} onClick={() => clear()}>Play Again</button>
            <button className='btn col m-2' style={{ backgroundColor: "#D2DE32" }} onClick={() => reset()}>New Game</button>
          </div>
        </div> : null}
      </div>
    </>
  )
}
