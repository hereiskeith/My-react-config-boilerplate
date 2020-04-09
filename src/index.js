import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

function Welcome () {
    return <h1>Hello World from React boilerplate</h1>;
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
