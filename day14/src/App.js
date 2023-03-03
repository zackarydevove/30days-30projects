import './App.css';
import { DragDropContext } from 'react-beautiful-dnd';
import { useState } from 'react';
import Column from './components/Column';

function App() {

  const initialData = {
    task: {
      'task-1': {id: 'task-1', content: 'Go to Gym'},
      'task-2': {id: 'task-2', content: 'Go buy food'},
      'task-3': {id: 'task-3', content: 'Wash dishes'},
      'task-4': {id: 'task-4', content: 'Study 3 hours'}
    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'not-started',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
      },
      'column-2': {
        id: 'column-2',
        title: 'in-progress',
        taskIds: []
      },
      'column-3': {
        id: 'column-3',
        title: 'done',
        taskIds: []
      }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
  }

  const [data, setData] = useState(initialData);
  
  const onDragEnd = (result) => {
    if (!result.destination) return;
    // The draggable item was moved nowhere, so it come back at initial position
  
    const { source, destination } = result;
  
    if (source.droppableId === destination.droppableId) {
      // The draggable item was moved within the same column
      const column = data.columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, result.draggableId);
  
      const newColumn = {
        ...column,
        taskIds: newTaskIds,
      };
  
      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };
  
      setData(newData);
    } else {
      // The draggable item was moved to a different column
      const column_from = data.columns[source.droppableId];
      const newTaskIds_from = Array.from(column_from.taskIds);
      newTaskIds_from.splice(source.index, 1);
  
      const column_to = data.columns[destination.droppableId];
      const newTaskIds_to = Array.from(column_to.taskIds);
      newTaskIds_to.splice(destination.index, 0, result.draggableId);
  
      const newColumn_from = {
        ...column_from,
        taskIds: newTaskIds_from,
      };
  
      const newColumn_to = {
        ...column_to,
        taskIds: newTaskIds_to,
      };
  
      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn_from.id]: newColumn_from,
          [newColumn_to.id]: newColumn_to,
        },
      };
  
      setData(newData);
    }
  };

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  }

  const handleClick = () => {
    const newTaskId = (data.columns['column-1'].taskIds.length + 1).toString();
    const newTask = {
      id: newTaskId,
      content: input,
    };
  
    const newData = {
      ...data,
      task: {
        ...data.task,
        [newTaskId]: newTask,
      },
      columns: {
        ...data.columns,
        'column-1': {
          ...data.columns['column-1'],
          taskIds: [...data.columns['column-1'].taskIds, newTaskId],
        },
      },
    };
  
    setData(newData);
    setInput('');
  };

  return (
    <>
      <div className='input'>
        <input onChange={handleChange} value={input}></input>
        <button onClick={handleClick}>X</button>
      </div>
      <div className='tasks'>
        <DragDropContext onDragEnd={onDragEnd}>
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId]
            const task = column.taskIds.map((taskId) => data.task[taskId])
            return <Column key={column.id} column={column} tasks={task} />
          })}
        </DragDropContext>
      </div>
    </>
  )
}

export default App;
