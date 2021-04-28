import Task from './Task'

const AvailableTask = ({tasks}) =>{
    return (
        <>
            {tasks.map((task) =>(<Task key={task.id} task={task}/>))}
        </>
    )
}

export default AvailableTask