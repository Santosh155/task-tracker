import Task from './Task'

const AvailableTask = ({tasks, onDelete, onToggle}) =>{
    return (
        <>
            {tasks.map((task) =>(<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
        </>
    )
}

export default AvailableTask