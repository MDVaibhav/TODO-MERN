import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { getBackgroundColor } from '../utils/getBackgroundColor';

const ToDo = ({ text, expiryDate, updateMode, deleteToDo }) => {
  const backgroundColor = getBackgroundColor(expiryDate);

  return (
    <div className="todo" style={{ backgroundColor }}>
      <div className="text">{text}</div>
      <div className="expiry-date">{new Date(expiryDate).toLocaleString()}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
