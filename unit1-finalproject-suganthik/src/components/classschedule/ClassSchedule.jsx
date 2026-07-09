import { Link } from 'react-router-dom';
import { useState } from 'react';
import KidsLevels from '../classschedule/KidsLevels'
import AdultsLevels from '../classschedule/AdultLevels'


function ClassSchedule(){
  const [StudentType, setStudentType] = useState("");

  return (
    <div className="class-schedule-page">

      <h2>CLASS LEVELS AND TIMINGS</h2>
      <h3>Levels</h3>
      <div className ="button-type-toggle">
        <button 
        onClick={() => setStudentType("Kids")} >
          Kids
                  </button>
                  <button
                    onClick={() => setStudentType("Adults")} >
                      Adults
                  </button>                
                 
      </div>
       <div className="levels-container">
                    {StudentType === "Kids" && <KidsLevels /> }
                    {StudentType === "Adults" && <AdultsLevels />}
                  </div>     
      <div className= "timings container">
      <h3>
        <Link to="/schedule/timings">View Class Timings</Link>
      </h3>
    </div>
    </div>
  );
}

export default ClassSchedule;
