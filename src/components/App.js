import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import {initialState, reducer} from '../reducers/index.js';
import {applyNumber, changeOperator, memoryActions} from '../actions/index.js';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clickNumberHandler = (evt) => {
    dispatch(applyNumber(parseInt(evt.target.value)));
  }

  const clickOperatorHandler = (evt) => {
    dispatch(changeOperator(evt.target.value));
  }

  const clickMemoryHandler = (evt) => {
    dispatch(memoryActions(evt.target.value));
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation} </span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={clickMemoryHandler}/>
              <CalcButton value={"MR"} onClick={clickMemoryHandler}/>
              <CalcButton value={"MC"} onClick={clickMemoryHandler}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={clickNumberHandler}/>
              <CalcButton value={2} onClick={clickNumberHandler}/>
              <CalcButton value={3} onClick={clickNumberHandler}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={clickNumberHandler}/>
              <CalcButton value={5} onClick={clickNumberHandler}/>
              <CalcButton value={6} onClick={clickNumberHandler}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={clickNumberHandler}/>
              <CalcButton value={8} onClick={clickNumberHandler}/>
              <CalcButton value={9} onClick={clickNumberHandler}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={clickOperatorHandler}/>
              <CalcButton value={"*"} onClick={clickOperatorHandler}/>
              <CalcButton value={"-"} onClick={clickOperatorHandler}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
