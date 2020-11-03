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
      <p>my age is: {props.title}</p>
      <p>my video: {props.video}</p>

      {newArr}
    </div>
  );
}

/* 
  console.log(this.props.myName);
    console.log(this.props.myAge);

    const { myName, myAge } = this.props;




   <p>
          My name is: {myName} My age is: {myAge}{' '}
        </p>






         const strings = ['eat', 'play', 'pray'];
    const nums = [2, 5, 7];
    //  [4,10,14]   [<p> , <p> ,<p>]
    const nums2 = nums.map((item) => item * 2);
    const strings2 =strings.map((elem,i)=>{
      return <p>{elem.toUpperCase()}</p>
    });
 {strings2}



    '
*/
