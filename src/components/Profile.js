import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <h2>User Profile</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="number" placeholder="Age" />
        <input type="number" placeholder="Weight" />
        <input type="number" placeholder="Height" />
        <select>
          <option value="">Select Fitness Goal</option>
          <option value="lose">Lose Weight</option>
          <option value="gain">Gain Muscle</option>
          <option value="maintain">Maintain Fitness</option>
        </select>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;