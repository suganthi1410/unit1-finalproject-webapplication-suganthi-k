import { Link } from 'react-router-dom';

function ClassSchedule(){
  return (
    <div>
      <h2>Class Levels</h2>
      <p>Select a level to learn more, or view all class timings below.</p>

    <section>
        <h3>Beginner Level</h3>
        <p>Perfect for new students learning basic steps and posture.</p>
        <p><strong>Fees:</strong> $60/month</p>
      </section>

      
      <section>
        <h3>Intermediate Level</h3>
        <p>For students who know basics and want to improve technique.</p>
        <p><strong>Fees:</strong> $75/month</p>
      </section>

      
      <section>
        <h3>Advanced Level</h3>
        <p>For experienced dancers focusing on performance and choreography.</p>
        <p><strong>Fees:</strong> $90/month</p>
      </section>

      
      <h3>
        <Link to="/schedule/timings">View Class Timings</Link>
      </h3>
    </div>
  );
}

export default ClassSchedule;
