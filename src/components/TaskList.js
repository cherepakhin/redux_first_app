import React from 'react';
import { ListGroup } from "react-bootstrap";
import Task from './Task';

// Это ПРОСТОЙ компонент, никак не связанный с REDUX
// К redux привязан Task
// TaskList использован в App.js:
//   const tasks = useSelector(state => state);
//   ...
//   <TaskList tasks={ tasks } />

// (не совсем типично использование массива как state. Обычно это сложный объект)
// что-то типа:
//    {
//      tasks: [{id:001001, title: '...', completed: false}, ...]}
//      jobs: {....}
//    }
// Пример state для этого проекта: [{id:001001, title: '...', completed: false}, ...]

const TaskList = ({ tasks }) => {

  if (tasks.length)
    return (
      <ListGroup>
        {
          tasks.map(task =>
            <Task key={task.id} task={task} />
          )
        }
      </ListGroup>
    )
  else return null;
}

export default TaskList;