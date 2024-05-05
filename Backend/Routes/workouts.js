const express = require('express');
const router = express.Router();
const Workout = require('../models/workoutModel');

const { createWorkout, 
        getAllWorkouts, 
        getWorkout, 
        deleteWorkout,
        updateWorkout
    } = require('../controllers/workoutController')

router.get('/', getAllWorkouts);
router.post('/', createWorkout);
router.get('/:id', getWorkout);
router.delete('/:id', deleteWorkout);
router.patch('/:id', updateWorkout);


module.exports = router;