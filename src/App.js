import {useState } from 'react'
import Header from './components/Header'
import AvailableTask from './components/AvailableTask'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1, 
        text: 'Doctor Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2, 
        text: 'School Appointment',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3, 
        text: 'Food Shopping',
        day: 'Feb 5th at 1:30pm',
        reminder: false
    }
])
  return (
    <div className="App">
      <Header />
      <AvailableTask tasks={tasks}/>
    </div>
  );
}

export default App;
