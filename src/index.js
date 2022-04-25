/*import React from 'react'; ya no es necesario por la nueva version, 
ahora en una aplicacion web de react se pueden ocupar de manera automatica sin necesidad
de importar la libreria uwu*/

//forma con react DOM Obsoleto
/*import ReactDOM from 'react-dom';


const saludo = <h1>hola mundo</h1>;


const divRoot = document.querySelector('#root');

ReactDOM.render( saludo, divRoot );*/

//import React from "react"; innecesario
import {createRoot} from "react-dom/client"; // llamada al React DOM para renderizar componentes
//import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css';

 
// react 18
const root = createRoot(document.getElementById('root'));
root.render(<CounterApp value = {0}/>);




