import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  // console.log('tasksArr: ', props.tasksArr);
  // [{eat},{play},{pray}]
  //  todo => { title: 'eat', isCompelted: false }
  // [<TodoItem/>, <TodoItem/>, <TodoItem/>]
  const newArr = props.todos.map((item) => {
    return <TodoItem todo={item} key={item.id} />;
    // props: { oneTask: item }
  });

  return (
    <div className="todo-list">
      <p>TodoList</p>
      <p>title: {props.title}</p>
      <p>my video: {props.video}</p>

      {newArr}
    </div>
  );};


  export default TodoList;




        


