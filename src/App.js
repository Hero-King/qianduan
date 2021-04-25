import React from 'react';
import './App.css';
import Comment from './react-demo/comment/Comment'
function App() {
  return (
    <div className="App">
      <Comment></Comment>
      <div className="parent" onClick={e => console.log("click parent")}>
        <div className="child" onClick= { e => console.log("click div ")}>
          click me 
        </div>
      </div>

    </div>
  );
}

export default App;
