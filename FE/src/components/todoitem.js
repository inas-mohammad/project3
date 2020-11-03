import React, { Component } from 'react';

// export default function TodoItem (props){
const TodoItem = (props) => {
  const { todo } = props;
  const { title, image } = todo;
  return (
    <div className="todo-item">
      {/* <p>TodoItem</p> */}
      <span> {title} </span>
      {/* condition ? ifTrue : ifFalse   */}
      <span> {isCompleted ? ' [Done]' : ' [Pending]'}</span>

      <input type="checkbox" image="" image="" />

      <button>X</button>
    </div>
  );
};
export default TodoItem;
