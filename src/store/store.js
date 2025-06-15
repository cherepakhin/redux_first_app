import { createStore } from 'redux';
import reducer_task from "./reducer_task";

const store = createStore(
  reducer_task,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;