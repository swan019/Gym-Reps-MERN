import React, { useState } from 'react';
import '../App.css';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { json } from 'react-router-dom';

const NewWorkoutForm = () => {
  const [title, setTitle] = useState('');
  const [load, setLoad] = useState('');
  const [reps, setReps] = useState('');
  const [error, setError] = useState('');
  const {dispatch} = useWorkoutsContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (title.trim() === '' || load <= 0 || reps <= 0) {
        setError('Please fill out all fields correctly');
        return;
      }
      const response = await fetch('http://localhost:4000/api/workouts/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, load, reps }),
      });

      const json = await response.json();
      if (response.ok) {
        // Handle success
        setTitle('');
        setLoad('');
        setReps('');
        // setError('Data sent successfully');
        setError('');
        console.log('Data sent successfully');
        dispatch({type:'CREATE_WORKOUTS', payload:json});

      } else {
        // Handle error
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while submitting the form');
    }
  };

  return (
    <div className='formmain'>
      <h2 className='text-[30px] font-semibold'>Create New Workout</h2>

      <div className='formBox rounded-lg'>
        <form onSubmit={handleSubmit} className='max-w-xl mx-auto form'>
          <div className='mb-4'>
            <label className='font-bold mb-2 text-lg p-1'>Exersize Title</label>
            <input
              type='text'
              className='form-input mt-1 block w-full p-2 rounded-lg bg-gray-700'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='font-bold mb-2 text-lg p-1'>Load</label>
            <input
              type='number'
              className='form-input mt-1 block w-full p-2 rounded-lg bg-gray-700'
              value={load}
              onChange={(e) => setLoad(parseInt(e.target.value))}
            />
          </div>
          <div className='mb-4'>
            <label className='font-bold mb-2 text-lg p-1'>Reps</label>
            <input
              type='number'
              className='form-input mt-1 block w-full p-2 rounded-lg bg-gray-700'
              value={reps}
              onChange={(e) => setReps(parseInt(e.target.value))}
            />
          </div>
          {error && (
            <div className='text-red-500 text-sm mb-4'>{error}</div>
          )}
          <div className=' button mt-2 mb-[-0.31rem]'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded p-2'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewWorkoutForm;
