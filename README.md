# Meme-App
for make app
`npx create-react-app meme-app`

for run the app use 
`npm start`

for styling use bootstrap
`npm i bootstrap`

for using bootstap css first import it
```js 
import "bootstrap/dist/css/bootstrap.min.css" 
```
- import BrowserRouter form the react-router-dom
  for use the router propertis we inclose the <App/> component in b/w them

  ```js
  import { BrowserRouter } from 'react-router-dom';
 <BrowserRouter>
    <App />
</BrowserRouter>
```

# make a component , page folder , and using react bootstarch 
- make a component folder
- make a pages folder 
- in comonent folder make a card component 
using react-bootstrap
`npm i react-bootstrap`
fom react bootstrap make a card component

- make a home page in b/w the pages and 
after this using router route the home page 
```js
 <div className="App">
      <h1>Meme-App</h1>
      <Routes>
        <Route path='/' element = {<Home/>}/>
      </Routes>
    </div>
```
# Data fetch
make new folder api in src folder and in which we make a meme.js 
file in which we call the api for the meme data

- api calling
```js
const url = 'https://api.imgflip.com/get_memes'
export const getAllMmemes = async()=>{
    const response = await fetch(url);
    return await response.json();
}
```
then import function getAllMemes into the home component 
and check coming data in cosole
```js
import {getAllMmemes} from '../api/memes'
// using useEffact chack console that data is fetching or not
 useEffect(()=>{
        getAllMmemes().then((memes)=>console.log(memes))
    },[])
```

- using useState we setData which in coming from the memes urls
```js
const [data , setData ] = useState([]);

  useEffect(() => {
    getAllMmemes().then((memes) => 
    setData(memes.data.memes)
    );
  }, []);
```

# now modify edit button for edit any meme and add some text in meme

1. for rediracte user thrue the edit button use 
import
```js
import { useNavigate } from 'react-router-dom';
  <Button onClick={(e)=>Navigate(`/edit?url=${props.img}`)} variant="primary"  >Edit</Button>
  ```
  we can get url of image at the edit pade as a quray parameter
- we will make a Edit page and route it into the edit page

# now at the edit page we show the image
using useSearchPrams , find the url of image
```js
import { useSearchParams } from 'react-router-dom'
    const [props] = useSearchParams();
    console.log(props.get('url'))
```
now we access the url of image using props.get mathod

- if we click to edit than we get a this memes 
```js
import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Edit = () => {
    const [props] = useSearchParams();
    // console.log(props.get('url'))
    const url = props.get('url');
  return (
    <div className='edit-url'> 
    <img src={url}/>
    </div>
  )
}

export default Edit
```
make some css to edit-url-image

# now give a button on edit page for add a text in  image
 we add a button on the edit page and 
 when we click on it it give a text;

 for this we will make a text.jsx component 
 ```js
  import React from 'react'

const Text = () => {
  return (
    <div><h5>This is a new Text</h5></div>
  )
}

export default Text;
```
now in the edit page we rander this text componet while click the button edit text
using use stae we store the count of the no of text and using set count we 
we set the count 
```js
  const [count , setCount ] = useState(0);

     const addText=()=>{
        setCount(count+1)}

    {Array(count).fill(0).map((e)=><Text/>)}

 <Button onClick={addText}>Add Text</Button>
 ```

 ```jsx
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
```
# now we want to make text dragable
- so use react dragable libarary
so for install a react dragable lib
`npm i react-draggable`
for using this we inclose the text in this lib

```js
import React from 'react'
import Draggable from 'react-draggable';

const Text = () => {
  return (
    <Draggable>
    <h3>This is a new Text</h3>

    </Draggable>
  )
}

export default Text;
```
# now we want , if we dubble click on the text than it canbe in editable from

for this we use two time useState one for chack etable mode is on/off
and one for the set the val of the editable text
```js
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
```
# Now we want a button to save the editable button
we add a save button at the the edit.jsx page
- for the save image on local drive we use a react lib "react-component-export-image"
- for install this lib
`npm i react-component-export-image`
  
after this , in which lib , we use exportComponentAsJPEG 
- for export first we make a reference using recat lib "createRef"
and make a reference of select meames
and using exportComponentAsJPEG we download
 the meame 
 ```js
 import { createRef } from 'react';
const memeRef = createRef();
 // pass the ref to meme
    <div ref={memeRef}>
    </div> 
```
 - use the xportComponentAsJPEG 
 in b/w save button we use this
```jsx

 <Button className= 'btn' variant='sucess' onClick={(e) => exportComponentAsJPEG(memeRef)}>Save To Meme</Button>

 ```


