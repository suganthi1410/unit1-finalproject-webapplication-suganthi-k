import { useState } from 'react';
import { Link } from 'react-router-dom';
import timings from './mockdata/ClassTimingsData.js';
import TimingsDisplay from './TimingsDisplay.jsx';
import '../classschedule/classpagecss/ClassTimings.css';
import mudraright from "../../assets/images/mudraright.jpeg";


function ClassTimings() {

  const [selectedType, setSelectedType] = useState("");
    const [selectedLevel, setSelectedLevel ] = useState("");

    const filteredTimings = timings.filter((timingInfo) =>{
      if(!selectedType || !selectedLevel) return false;

      return(
        timingInfo.type === selectedType &&
      timingInfo.level === selectedLevel
    );
  });
    
  return (
    <div className="timings-page" >
      <h3>CLASS TIMINGS </h3>
      <p>Please select the Student Type and Level</p>
<div className="timings-page-container" >
      <div className="select-type-level">
          <select value={selectedType} onChange= {(e) =>
      setSelectedType(e.target.value)} >
        <option value="">Select Type </option>
        <option value="Kids">Kids </option>
        <option value="Adults">Adults</option>        
      </select>
</div>
<div className="select-type-level">
      <select value = {selectedLevel} onChange={(e) =>
      setSelectedLevel(e.target.value)} >
        <option value="">Select Level </option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>

      </select>
      </div>

    </div>
      <TimingsDisplay items={filteredTimings} />

      <Link to= "/class">
      <button className="back-button" >
        <img src={mudraright} alt="mudra" className="back-button-icon" />
        Back to Class page
      </button>
      </Link>
    
    </div>
  );
}

export default ClassTimings;
