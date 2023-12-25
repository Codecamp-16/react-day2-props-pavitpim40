import './index.css';
import React from 'react';
import { createRoot } from 'react-dom';
import Todo from './components/Todo.jsx';

// React
function App() {
  return (
    <>
      <Todo />
      <Todo />
      <Todo />
    </>
  );
}

// ReactDOM
const domNode = document.getElementById('root');
// const root = ReactDOM.createRoot(domNode);
const root = createRoot(domNode);

root.render(<App />);
