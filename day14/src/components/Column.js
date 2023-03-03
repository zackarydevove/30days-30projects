import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

function Column({column, tasks}) {
  return (
    <div className='task-column'>
      <h2>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <ul
            className='task-list'
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
}

export default Column;
