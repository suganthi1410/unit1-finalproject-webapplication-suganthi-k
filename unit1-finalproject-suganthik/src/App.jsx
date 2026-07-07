import { BrowserRouter, Routes, Route } from 'react-router-dom';


import ClassSchedule from './components/classschedule/ClassSchedule.jsx';


function App() {
  return (
    <BrowserRouter>   

      <Routes>
        <Route path="/" element={<ClassSchedule />} />
        <Route path="/schedule" element={<ClassSchedule />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
