import React, { useState } from 'react';
import {Button, Alert} from 'react-bootstrap'
import './App.css';
import './bootstrap.min.css' //See https://bootswatch.com/superhero/ for theme documentation

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      {show &&
        <Alert variant="warning" onClose={()=>setShow(false)} dismissible>
          Launching Global Thermonuclear War
        </Alert>
      }
      <Button variant="danger" onClick={() => setShow(true)}>Shall We Play A Game?</Button>      
    </>
  );
}

export default App;
