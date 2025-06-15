import * as actions from './action_types';

let lastId = 0;
// reduser.js использован в store.js
// должен венуть новый state на основе предыдущего state и действия action

// использование в AddNewTask.js (через dispatch):

//  const handleTaskSubmit = () => {
//    dispatch(actions.addTask({
//      title: taskTitle
//    }));
//    setTaskTitle('');
//  }
// state - это массив объектов задач.
// Пример: state: [{id:001001, title: '...', completed: false}, ...]
export default function reducer_task(state = [], action) {
  switch (action.type) {
    case actions.TASK_ADD:
      return [...state, {
        id: ++lastId,
        title: action.payload.title,
        completed: false,
      }];

    case actions.TASK_TOGGLE:
      return state.map(task => {
        if (task.id === action.payload.id)
          return { ...task, completed: !task.completed }
        return task;
      });

    case actions.TASK_REMOVE:
      return state.filter(task => action.payload.id !== task.id);

    default:
      return state;
  }
}