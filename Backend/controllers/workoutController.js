const Workout = require('../models/workoutModel');

//create new workout
const createWorkout = async (req, res) => {

    try {
        const { title, reps, load } = req.body;
        const workoutDoc = await Workout.create({ title, reps, load });
        res.status(200).json(workoutDoc);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//get all workout

const getAllWorkouts = async (req, res) => {
    try {
        const allWorkout = await Workout.find({}).sort({createdAt:-1});
        res.status(200).json(allWorkout);

    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


//get singworkout

const getWorkout = async(req, res) => {
    try {
        
        const {id} = req.params;
        const workout = await Workout.findById(id);

        if(!workout){
            res.status(404).json({error:"No Workout"});
        }

        res.status(200).json(workout);

    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


//delete workout
const deleteWorkout = async(req, res) => {
    try {
        
        const {id} = req.params;
        const workout = await Workout.findByIdAndDelete({_id:id});
        if(!workout){
            res.status(404).json({error:"No Workout"});
        }

        res.status(200).json(workout);

    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


//update workout
const updateWorkout = async(req, res) => {
    try {
        
        const {id} = req.params;
        const workout = await Workout.findByIdAndUpdate({_id:id}, {
            ...req.body
        });
        if(!workout){
            res.status(404).json({error:"No Workout"});
        }

        res.status(200).json(workout);

    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {createWorkout, getAllWorkouts, getWorkout, deleteWorkout, updateWorkout}