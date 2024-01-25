import React, { useContext, useState } from 'react'
import Board from './Board'
import { PointsContext } from './PointsContext'

export default function App() {

  let [name1, setName1] = useState('')
  let [name2, setName2] = useState('')
  let [pt, setPt] = useContext(PointsContext)
  let [show, setShow] = useState(true);
  return (
    <div className='container'>
      <h1 className='text-decoration-bold text-center mt-2'>Tic-Tac-Toe</h1>
      {show
        ?
        <form className='row ms-5'>
          <div className='col-3'>
            <label className='form-label'>Enter Player-1 Name <b>(X)</b></label>
            <input type='text' className='form-control' onChange={(e) => { setName1(e.target.value) }} />
          </div>
          <div className='col-3'>
            <label className='form-label'>Enter Player-2 Name <b>(O)</b></label>
            <input type='text' className='form-control' onChange={(e) => { setName2(e.target.value) }} />
          </div>
          <div className='col'>
            <button className='btn btn-info' onClick={() => setShow(false)}>Enter</button>
          </div>
        </form>
        :
        <div>
          <Board />
          <h3> {name1} <b>(X)</b> : {pt[0]} points</h3>
          <h3> {name2} <b>(O)</b> : {pt[1]} points</h3>
        </div>
      }
    </div>
  )
}
