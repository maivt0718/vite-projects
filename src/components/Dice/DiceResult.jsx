import React from 'react'
import { useSelector } from 'react-redux';

const DiceResult = () => {
  let classH3="font-bold text-3xl text-black"
  const { participant_name, total, winner, goal_mark } = useSelector((state) => state.diceSlice);
  return (
    <div className='dice_result space-y-5'>
      <h3 className={`partticipant ${classH3}`}>You choose: <span className='text-orange-400'>{participant_name}</span> </h3>
      <h3 className={`max ${classH3}`}>The maximum score: <span className='text-orange-400'>{goal_mark}</span> </h3>
      <h3 className={`winner ${classH3}`}>Winner: <span className='text-orange-400'>{winner}</span> </h3>
      <h3 className={`total ${classH3}`}>Total: <span className='text-orange-400'>{total}</span> </h3>
    </div>
  )
}

export default DiceResult