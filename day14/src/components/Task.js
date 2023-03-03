import { Draggable } from 'react-beautiful-dnd';

function Task({task, index}) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <li
          className='task-item'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          {task.content}
        </li>
      )}
    </Draggable>
  );
}

export default Task;
