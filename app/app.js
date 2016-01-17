import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld/HelloWorld.js';

var webpackDiv = document.getElementById('webpack-div');

ReactDOM.render(<HelloWorld name="Nisheed"/>, webpackDiv);
