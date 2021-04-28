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

const taskDelete = (id) => {
  setTasks(tasks.filter((task)=>task.id !== id))
}
  return (
    <div className="App">
      <Header />
      {tasks.length > 0 ? <AvailableTask tasks={tasks} onDelete={taskDelete}/> : 'No Task to Show'}
    </div>
  );
}

export default App;
