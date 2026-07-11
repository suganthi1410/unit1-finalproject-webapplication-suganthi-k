import { Link } from 'react-router-dom';
import { useState } from 'react';
import KidsLevels from '../classschedule/KidsLevels'
import AdultsLevels from '../classschedule/AdultLevels'
import '../classschedule/classpagecss/ClassLevel.css';



function ClassSchedule(){
  const [StudentType, setStudentType] = useState("");

  return (
    <div className="class-level-page">

      <h2 className="page-title">CLASS LEVELS AND TIMINGS</h2>
      <h3 className="level-title">Levels</h3>
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
       <div className="levels-display">
                    {StudentType === "Kids" && <KidsLevels /> }
                    {StudentType === "Adults" && <AdultsLevels />}
                  </div>     
      <div className= "link-to-timing">
      <h3>
        <Link to="/schedule/timings">View Class Timings</Link>
      </h3>
    </div>
    </div>
  );
}

export default ClassSchedule;
