import React from 'react';
import { ListGroup } from "react-bootstrap";
import Task from './Task';

// Это ПРОСТОЙ компонент, никак не связанный с REDUX
// TaskList использован в App.js:
// const tasks = useSelector(state => state);

// state - ЗДЕСЬ это МАССИВ объектов задач.
// (не совсем типично использование массива как state. Обычно это сложный объект)
// Пример state для этого проекта: [{id:001001, title: '...', completed: false}, ...]
// Использование компонента в App.js:
//   const tasks = useSelector(state => state);
//   ...
//   <TaskList tasks={ tasks } />

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