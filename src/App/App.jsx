import React from 'react';
//import '../css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">タイトル</div>
      </header>
      <body className="App-body">
        <form>
          <select className="MainPageSelect" id='op'>
            <option id="op0">一次方程式</option>
            <option id="op1">二次方程式</option>
          </select>
          <button id='actButton' onClick={act(this)}>実行</button>
        </form>
      </body>
    </div>
  );
  
}

function act(){
  var i = 'test'
  console.log(i);
}

