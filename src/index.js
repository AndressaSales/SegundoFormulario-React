import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//páginas que eu criei
//import Exemplo01 from './hooks/Exemplo01';
//import Exemplo02 from './hooks/Exemplo02';
//import Exemplo03 from './hooks/Exemplo03';
//import Exemplo04 from './hooks/Exemplo04';
//import Exemplo05 from './hooks/Exemplo05';
//import Exemplo06 from './hooks/Exemplo06';
//import Exemplo07 from './hooks/Exemplo07';
//import Exemplo08 from './hooks/Exemplo08';
//import Exemplo09 from './hooks/Exemplo09';
//import Exemplo10 from './hooks/Exemplo10';
//import Exemplo11 from './hooks/Exemplo11';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <App />

  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
