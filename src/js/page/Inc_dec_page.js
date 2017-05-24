import React, {Component} from 'react';
import Inc_Dec from '../components/Inc_Dec'

export default class Button_Page extends Component{
  render(){
    return(
      <div>

        <div className="text-center">
          <h1>INCREMENT_DECREMENT</h1>
          <p><strong>DESCRIPTION:</strong>
            THIS INCREMENT_DECREMENT COUNTER INCREMENTS AND DECREMENTS A
            GIVEN NUMBER.
          </p>
        </div>

        <div>
          <h1>EXAMPLE 1</h1>
          <p>INCRMENT AND DECREMENT NUMBER</p>
          <Inc_Dec initialValue={10} />
        </div>

        <div>
          <h1>EXAMPLE 2</h1>
          <p>INCRMENT AND DECREMENT NUMBER BY ANY AMOUNT, THIS CASE IS TWO</p>
          <Inc_Dec initialValue={10.00} incDecBy={2}/>
        </div>

        <div>
          <h1>EXAMPLE 3</h1>
          <p>INCRMENT AND DECREMENT DEIMCAL NUMBER BY ANY AMOUNT, THIS CASE IS TWO</p>
          <Inc_Dec initialValue={10.01} incDecBy={.01}/>
        </div>

      </div>
    );
  }
}
