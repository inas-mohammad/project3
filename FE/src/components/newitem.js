import React, { useState } from 'react';

const NewItem = (props) => {
  const [textInput, setTextInput] = useState('');

  const handleInputTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const addNewTaskToAppState = () => {
    props.add(textInput);
  };

  return (
    <div className="new-item">
      <p>New Item</p>
      <input
        onChange={handleInputTextChange}
        placeholder="write new task title here"
      />
      <button onClick={addNewTaskToAppState}>Add</button>
    </div>
  );
};
export default NewItem;
