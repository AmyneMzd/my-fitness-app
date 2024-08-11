import React from 'react';
import './WorkoutPlan.css';

function WorkoutPlan() {
  return (
    <div className="workout-plan">
      <h2>Workout Plan</h2>
      <div>
        <h3>Monday - Chest and Triceps</h3>
        <ul>
          <li>Bench Press: 3 sets of 10 reps</li>
          <li>Incline Dumbbell Press: 3 sets of 12 reps</li>
          <li>Tricep Pushdowns: 3 sets of 15 reps</li>
        </ul>
      </div>
      {/* Add more days as needed */}
    </div>
  );
}

export default WorkoutPlan;