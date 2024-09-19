import React from 'react'
import Draggable from 'react-draggable';
import { useState } from 'react';


const Text = () => {
     // on dubble clcik on enable the edit mode
     const [editMode , setEditMode] = useState(false);
     const [val, setVal] = useState("Dubble Click to Edit")
  return (
    <Draggable>
        {editMode?(<input onDoubleClick={e => setEditMode(false)} value={val}  onChange={(e)=> setVal(e.target.value)}/>):
        ( <h3 onDoubleClick={e => setEditMode(true)}>{val}</h3>)}
   

    </Draggable>
  )
}

export default Text;