import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext);

    if(!context){
        throw Error('useWorkoutContext must be used an WorkoutsContextsProvider');
    }

    return context;
}