import React from 'react';
import { useSelector } from 'react-redux';
// import { showName, selectTasks } from 'data/testSlice';

const NotesView = () => {
  // const name = useSelector(showName);
  const tasks = useSelector((state) => state.tasks.zadania);

  // const tasks = useSelector((state) => state);

  // console.log(tasks);

  return <div>{/* {tasks.map((task) => (
        <p>{task}</p>
      ))} */}</div>;
};

export default NotesView;
