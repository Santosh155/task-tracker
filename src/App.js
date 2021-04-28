import {useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AvailableTask from './components/AvailableTask'
import AddTask from './components/AddTask'
import About from './components/About'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() =>{
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }
    getTasks()
  }, [])

  // fetch Task
  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

//Fetch task
const fetchTask = async (id) =>{
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()

  return data
}


//Add Task
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', 
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const data = await res.json()
  setTasks([...tasks, data])
  // const id = Math.floor(Math.random() * 1000) + 1
  // const newTask = {id, ...task}
  // setTasks([...tasks, newTask])
}

// Delete Task
const taskDelete = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })
  setTasks(tasks.filter((task)=>task.id !== id))
}

// Toggle task
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updTasks = {...taskToToggle, reminder: !taskToToggle.reminder }
  const res = await fetch(`http://localhost:5000/tasks/${id}`,{ 
    method: 'PUT', 
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(updTasks)
    }    
  )

  const data = await res.json()
  setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: data.reminder}: task))
}
  return (
    <Router>
      <div className="App">
        <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        
        <Route path='/' exact render={
          (props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask}/> }
              {tasks.length > 0 ? <AvailableTask tasks={tasks} onDelete={taskDelete} onToggle={toggleReminder}/> 
              : 'No Task to Show'}
            </>
          )
        }/>
        <Route path='/about' component={About}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
