import React from 'react'

function Props(props) {
  return (
    <div key={props.count} className='props'>
        <div className='container'>
            <h1 className="text-black">Total counts: {props.count}</h1>
            <button className="bg-black" onClick={() => {props.updateCount()}}>Increase count</button>
        </div>
    </div>
  )
}

export default Props