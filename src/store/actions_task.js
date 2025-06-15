import * as actions from './action_types';

export const addTask = task => ({
  type: actions.TASK_ADD,
  payload: task
});

export const toggleTask = id => ({
  type: actions.TASK_TOGGLE,
  payload: { id } // см. ниже комментарий (вариант1)
});

export const removeTask = id => ({
  type: actions.TASK_REMOVE,
  payload: { id: id } // можно так (вариант2) или короче: "payload: { id }", как в (вариант1)
})