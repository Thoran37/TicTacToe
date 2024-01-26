import React, { useContext, useState } from 'react'
import Board from './Board'
import { PointsContext } from './PointsContext'
import Enter from './Images/enter1.png'
import TicTacToe from './Images/tictactoe.jpg'
import './App.css'

export default function App() {

  let [name1, setName1] = useState('Player - 1')
  let [name2, setName2] = useState('Player - 2')
  let [pt, setPt] = useContext(PointsContext)
  let [show, setShow] = useState(true);
  return (
    <div className='container'>
      <h1 className='text-decoration-bold text-center mt-2 display-2'>Tic-Tac-Toe</h1>
      {show
        ?
        <>
          <form className='row ms-3 fs-4'>
            <div className='col-4'>
              <label className='form-label'>Enter Player-1 Name <b>(X)</b></label>
              <input type='text' className='form-control' onChange={(e) => { setName1(e.target.value) }} />
            </div>
            <div className='col-4'>
              <label className='form-label'>Enter Player-2 Name <b>(O)</b></label>
              <input type='text' className='form-control' onChange={(e) => { setName2(e.target.value) }} />
            </div>
            <div className='col d-flex align-self-end cur' onClick={() => setShow(false)} >
              <img style={{ mixBlendMode: "color-dodge" }} src={Enter} alt='Imag' width='100px' />
              <h3 className='blink right ms-2'>Please click here to proceed</h3>
            </div>
          </form>
          <img className='d-block mx-auto mt-3' src={TicTacToe} width='600px' />
        </>
        :
        <div>
          <h3> {name1} <b>(X)</b> : {pt[0]} points</h3>
          <h3> {name2} <b>(O)</b> : {pt[1]} points</h3>
          <Board name1={name1} name2={name2} />
        </div>
      }
    </div >
  )
}
