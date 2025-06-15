import reducer_task from './reducer_task';

test('reducer_task', () => {
  let state;
  state = reducer_task([{id:1,title:'aaa',completed:false}], {type:'TASK_ADD',payload:{title:'bbb'}});
  expect(state).toEqual([{id:1,title:'aaa',completed:false},{id:1,title:'bbb',completed:false}]);
});