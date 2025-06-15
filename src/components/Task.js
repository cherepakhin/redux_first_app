import React from "react";
import { useDispatch } from "react-redux";
import { Form, ListGroup } from "react-bootstrap";
import { toggleTask, removeTask }  from "../store/actions_task";

// Вызывается в TaskList.js так:
// tasks.map(task => <Task ... task={task} />
// где "{task}" это {id:001001, title: '...', completed: false}, ...]
const Task = ({ task }) => {
  const { id, title, completed } = task; // где "{task}" это см.выше
  const dispatch = useDispatch(); // получение функции для передачи экшена в reducer

  return (
    <ListGroup.Item className={completed && 'task-completed'}>
      <Form.Check
        id={id}
        type="checkbox"
        label={id + '. ' + title}
        checked={completed}
        onChange={ () => dispatch(toggleTask(id)) } // отправка экшена в reducer.js
      />
      <div className="list-group-item-actions">
        <span onClick={() => dispatch(removeTask(id))}>Удалить</span>
      </div>
    </ListGroup.Item>
  )
}

export default Task;