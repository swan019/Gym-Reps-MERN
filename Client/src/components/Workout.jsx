import React from 'react'
import '../App.css'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { AiOutlineDelete } from "react-icons/ai";



function Workout({ Workout }) {

  const { dispatch } = useWorkoutsContext();

  const deleteHandler = async () => {
    const response = await fetch('http://localhost:4000/api/workouts/' + Workout._id, {
      method: 'DELETE'
    })
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUTS', payload: json });
    }
  }


  return (
    <div className='workout rounded-lg relative'>
      <h2 className='text-red-700 text-xl font-bold mb-[5px]'>{Workout.title}</h2>
      <p><strong className='text-blue-600'>Load (kg) : </strong>{Workout.load}</p>
      <p><strong className='text-blue-600'>Reps : </strong>{Workout.reps}</p>
      <p className='mt-2 text-[15px] text-gray-300 font-semibold'><strong className='text-blue-600'>Created At: </strong>{Workout.createdAt}</p>
      <span onClick={deleteHandler} className='absolute bottom-6 right-6 cursor-pointer delete' style={{ fontSize: '22px',  color:'gray'}}>
        <AiOutlineDelete />
      </span>

    </div>
  )
}

export default Workout