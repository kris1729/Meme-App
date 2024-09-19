import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Text from '../Component/Text';
import { createRef } from 'react';
import { exportComponentAsJPEG } from 'react-component-export-image';


const Edit = () => {
    const [props] = useSearchParams();
    const [count , setCount ] = useState(0);
    // console.log(props.get('url'))
    const url = props.get('url');


   

    const addText=()=>{
        setCount(count+1)
    };

    // make a ref
    const memeRef = createRef();

  return (
    <div>
    <div ref={memeRef}> 
    <img src={url} className='edit-url-image'/>
    {Array(count).fill(0).map((e)=><Text/>)}
    </div>
    <Button className='btn' onClick={addText}>Add Text</Button>
    <Button className='save' variant='success' onClick={(e) => exportComponentAsJPEG(memeRef)} >Save To Meme</Button>
   

    </div>
  )
}

export default Edit