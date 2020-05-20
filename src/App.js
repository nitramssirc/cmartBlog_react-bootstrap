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
            <h4 class="alert-heading">Warning!</h4>
            <p class="mb-0">
              Best check yo self, you're not looking too good. Nulla vitae elit
              libero, a pharetra augue. Praesent commodo cursus magna, .
            </p>
          </div>
        )}
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => setOldShow(true)}
        >
          Danger
        </button>
      </div>
    </>
  );
}

export default App;
