import {useState } from 'react'
import Header from './components/Header'
import AvailableTask from './components/AvailableTask'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
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

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const taskDelete = (id) => {
  setTasks(tasks.filter((task)=>task.id !== id))
}

// Toggle task
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder}: task))
}
  return (
    <div className="App">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/> }
      {tasks.length > 0 ? <AvailableTask tasks={tasks} onDelete={taskDelete} onToggle={toggleReminder}/> 
      : 'No Task to Show'}
    </div>
  );
}

export default App;
