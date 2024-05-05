import React, { useEffect, useState } from 'react';
import Workout from '../components/Workout';
import '../App.css'
import NewWorkoutForm from '../components/NewWorkoutForm';

function Home() {
  const [workouts, setWorkouts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/workouts/");
        const json = await response.json();
        if (response.ok) {
          setWorkouts(json);
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);



  return (
    <div className="homeScreen flex">

      <div className='homeBox '>
        {loading ? (
          <div className="text-white">Loading...</div>
        ) : (

          <div>

            {
              workouts && workouts.map((workout) => (
                <Workout key={workout._id} Workout={workout} />
              ))
            }


          </div>
        )}
          <NewWorkoutForm/>
      </div>


    </div>
  );
}

export default Home;
