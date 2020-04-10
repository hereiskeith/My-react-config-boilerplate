import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import BizMsM from './static/images/bizmsm.png';

function Welcome () {
  console.log('process.env.VERSION', process.env.VERSION);
  console.log('process.env.PLATFORM', process.env.PLATFORM);
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);

  return (
    <div>
      <img src={BizMsM} />
      <h1>
        Hello World from React boilerplate
      </h1>
    </div>
  );
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
