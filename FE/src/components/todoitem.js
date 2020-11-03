import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { todo } = this.props;
    const { title, image } = todo;
    console.log('THIS: ', this);
    return (
      <div className="todo-item">
        {/* <p>TodoItem</p> */}
        <span>
          {' '}
          {image}- {title}{' '}
        </span>
        {/* condition ? ifTrue : ifFalse   */}
        <span> {isCompleted ? ' [Done]' : ' [Pending]'}</span>

        <input type="checkbox" image="" image="" />

        <button>X</button>
      </div>
    );
  }
}

/* 










 condition ? ifTrue : ifFalse  
 {7>5 ? 'YES': 'NO' }

 if(7>5){
   return 'YES'
 }else{
   return 'NO'
 }

 
 
 */
