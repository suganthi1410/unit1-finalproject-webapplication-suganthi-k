import { useState } from 'react';
import timings from './mockdata/ClassTimingsData.js';
import TimingsDisplay from './TimingsDisplay.jsx';

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
    console.log("selectedType:",selectedType );
    console.log("selectedLevel:",selectedLevel);
    console.log("Filtered:", filteredTimings);

    
  return (
    <div>
      <h3>ClassTimings for Selected Level </h3>

      <select value={selectedType} onChange= {(e) =>
      setSelectedType(e.target.value)} >
        <option value="">Select Type </option>
        <option value="Kids">Kids </option>
        <option value="Adults">Adults</option>        
      </select>

      <select value = {selectedLevel} onChange={(e) =>
      setSelectedLevel(e.target.value)} >
        <option value="">Select Level </option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>

      </select>
      <TimingsDisplay items={filteredTimings} />
    
    </div>
  );
}

export default ClassTimings;
