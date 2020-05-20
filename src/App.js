import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import "./App.css";
import "./bootstrap.min.css"; //See https://bootswatch.com/superhero/ for theme documentation

function App() {
  const [show, setShow] = useState(false);
  const [oldshow, setOldShow] = useState(false);
  return (
    <>
      {show && (
        <Alert variant="warning" onClose={() => setShow(false)} dismissible>
          Launching Global Thermonuclear War
        </Alert>
      )}
      <Button variant="danger" onClick={() => setShow(true)}>
        Shall We Play A Game?
      </Button>
      <div>
      {oldshow && (
          <div class="alert alert-dismissible alert-warning">
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              onClick={() => setOldShow(false)}
            >
              &times;
            </button>
            <p class="mb-0">
            Launching Global Thermonuclear War
            </p>
          </div>
        )}
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => setOldShow(true)}
        >
          Shall We Play A Game?
        </button>
      </div>
    </>
  );
}

export default App;
