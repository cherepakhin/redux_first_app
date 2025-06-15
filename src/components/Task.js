import React from "react";
import { useDispatch } from "react-redux";
import { Form, ListGroup } from "react-bootstrap";
import { toggleTask, removeTask }  from "../store/actions_task";

// К store не привязан, т.к. получает данные (task) из родителя TaskList.js (см.ниже),
// но к redux все-таки привязан, т.к. отправляет action в reducer.js через функцию dispatch.
// Это не совсем чистый компонент, т.к. использует функцию "dispatch",

// Вызывается в TaskList.js так:
// tasks.map(task => <Task ... task={task} />
// где "{task}" это {id:001001, title: '...', completed: false}, ...]
  const Task = ({ task }) => {
  const { id, title, completed } = task; // где "{task}" это см.выше

  // получение функции "dispatch" для передачи action в reducer
  // не совсем чистый компонент. использует функцию "dispatch"
  const dispatch = useDispatch();

  return (
    <ListGroup.Item className={completed && 'task-completed'}>
      <Form.Check
        id={id}
        type="checkbox"
        label={id + '. ' + title}
        checked={completed}
        onChange={ () => dispatch(toggleTask(id)) } // отправка action toggleTask в reducer.js
      />
      <div className="list-group-item-actions">
        <span onClick={() => dispatch(removeTask(id))}>Удалить</span> // отправка action removeTask в reducer.js
      </div>
    </ListGroup.Item>
  )
}

export default Task;