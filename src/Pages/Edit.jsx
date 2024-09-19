import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Text from '../Component/Text';


const Edit = () => {
    const [props] = useSearchParams();
    const [count , setCount ] = useState(0);
    // console.log(props.get('url'))
    const url = props.get('url');

   

    const addText=()=>{
        setCount(count+1)
    }
  return (
    <div>
    <div > 
    <img src={url} className='edit-url-image'/>
    {Array(count).fill(0).map((e)=><Text/>)}
    </div>
    <Button onClick={addText}>Add Text</Button>
    </div>
  )
}

export default Edit