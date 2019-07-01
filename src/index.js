import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

let doStuff = () => {
  console.log("this works")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={doStuff} />
  </div>,
  document.getElementById('root')
);