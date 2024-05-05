import React from 'react'
import '../App.css'
function Workout({Workout}) {
  return (
    <div className='workout'>
        <h2>{Workout.title}</h2>
        <p><strong>Load (kg) :</strong>{Workout.load}</p>
        <p><strong>Reps :</strong>{Workout.reps}</p>
        <p><strong>CreatedAt :</strong>{Workout.createdAt}</p>
    </div>
  )
}

export default Workout