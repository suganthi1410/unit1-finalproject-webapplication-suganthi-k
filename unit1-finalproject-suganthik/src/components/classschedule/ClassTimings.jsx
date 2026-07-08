import timings from './mockdata/TimeData.js';

function ClassTimings() {
  const kids = timings.filter(item => item.group.startsWith("Kids"));
  const adults = timings.filter(item => item.group.startsWith("Adults"));

  return (
    <div>
      <h2>Class Timings</h2>

      <h3>Kids</h3>
      {kids.map((item, index) => (
        <p key={index}>
          {item.group}: {item.time}
        </p>
      ))}

      <h3>Adults</h3>
      {adults.map((item, index) => (
        <p key={index}>
          {item.group}:{item.time}
        </p>
      ))}
    </div>
  );
}

export default ClassTimings;
