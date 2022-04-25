import React, {useState} from "react";
import PropTypes from "prop-types";

const CounterApp = ({value = 0}) => {

    const [ counter, setCounter ]= useState(value);


    //handleAdd
    const handleAdd = (e) => {

        setCounter( counter + 1 ); //normal si tengo acceso al coso (en este caso el counter)
        //setCounter( (v) => v + 1 ); //alternativa si no tengo acceso al coso (en este caso el counter)
    }

    const handleRemove = (e) => {
       setCounter( counter - 1 );
    }

    const handleReset = (e) =>{
        setCounter(value);
    }

    return (
        <>
    
            <h1>Contador</h1>
            <h2>{ counter }</h2>

            <div className="botones">
                <button onClick={handleRemove}>-1</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleAdd}>+1</button>
            </div>
        </>
    );
    

}

CounterApp.propTypes = {
    value:PropTypes.number.isRequired
}

export default CounterApp;