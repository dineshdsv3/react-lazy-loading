import React from 'react';
import './App.css';
import Post from './Post';
import data from './data';
import Lazyload from 'react-lazyload';

function App() {

  return (
    <div className="App">
      <h2>lazy loading demo</h2>
        <div className="post-container">
          {data.map((ele) => (
            <Post id={ele.id} title={ele.title} body={ele.body}/>
          ))}
        </div >
    </div>
  );
}

export default App;
