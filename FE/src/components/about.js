import React, { Component } from 'react';

export default function About(props) {
  const { image, title } = props;
  return (
    <div className="about">
      <h1>ABOUT</h1>
      <button
        onClick={() => {
          props.history.push('/');
        }}
      >
        Go To Home
      </button>
      <button
        onClick={() => {
          props.history.push('/tasks');
        }}
      >
        Go To Task
      </button>
      <p>title: {title}</p>
      <p>image: {image}</p>
      
    </div>
  );
}