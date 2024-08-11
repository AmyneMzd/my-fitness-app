import React from 'react';
import './NutritionPlan.css';

function NutritionPlan() {
  return (
    <div className="nutrition-plan">
      <h2>Nutrition Plan</h2>
      <div>
        <h3>Breakfast</h3>
        <ul>
          <li>Oatmeal with berries</li>
          <li>Greek yogurt</li>
          <li>Scrambled eggs</li>
        </ul>
      </div>
      {/* Add more meals as needed */}
    </div>
  );
}

export default NutritionPlan;