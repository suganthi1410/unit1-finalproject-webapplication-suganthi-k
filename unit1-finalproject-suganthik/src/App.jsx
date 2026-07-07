import { BrowserRouter, Routes, Route } from 'react-router-dom';


import ClassSchedule from './components/classschedule/ClassSchedule.jsx';
import ClassTimings from "./components/classschedule/ClassTimings";


function App() {
  return (
    <BrowserRouter>   

      <Routes>
        <Route path="/" element={<ClassSchedule />} />
        <Route path="/schedule" element={<ClassSchedule />} />
        <Route path="/schedule/timings" element={<ClassTimings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
