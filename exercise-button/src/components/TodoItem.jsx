/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const TodoItem=({name, name2 , handleComplete  ,handleDelete} ) =>{

  const OnDelete = () => {
handleDelete();
  };
  const OnComplete = () => {
    handleComplete();
  };
  return (
    <div style={{ display: 'flex', minWidth: 100, minHeight: 50 }}>
      <p style={{ marginRight: '10px' }}>{name}</p>
      <p style={{ marginRight: '10px' }}>{name2}</p>
      <button
        onClick={OnDelete}
        style={{
          backgroundColor: 'gray',
          paddingInline: 10,
          display: 'flex',
          marginTop: '10px',
        }}
      >
        delete
      </button>

      <button
        onClick={OnComplete}
        style={{
          backgroundColor: 'gray',
          paddingInline: 10,
          display: 'flex',
          marginTop: '10px',
        }}
      >
        complete
      </button>
    </div>
  );
};

export default TodoItem;
