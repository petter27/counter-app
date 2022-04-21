import React from 'react';
import { createRoot } from 'react-dom/client';
import CounterApp from './CounterApp';
import PrimeraApp from './PrimeraApp';
import './index.css';


const container = document.getElementById('root');
const root = createRoot(container);

// le pasamos el documento
//root.render(<CounterApp value = { 10 }/>);
root.render(<PrimeraApp saludo='Hola soy Goku'></PrimeraApp>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
