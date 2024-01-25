import React, { useContext, useState } from 'react'
import Board from './Board'
import { PointsContext } from './PointsContext'
import Enter from './Images/enter.png'
import TicTacToe from './Images/tictactoe.jpg'
import './App.css'

export default function App() {

  let [name1, setName1] = useState('')
  let [name2, setName2] = useState('')
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
            <div className='col d-flex align-self-end'>
              <img src={Enter} alt='Imag' width='95px' onClick={() => setShow(false)} />
            </div>
          </form>
          <img className='d-block mx-auto mt-3' src={TicTacToe} width='600px' />
        </>
        :
        <div>
          <h3> {name1} <b>(X)</b> : {pt[0]} points</h3>
          <h3> {name2} <b>(O)</b> : {pt[1]} points</h3>
          <Board />
        </div>
      }
    </div>
  )
}
