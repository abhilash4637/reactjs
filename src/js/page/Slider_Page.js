import React, {Component} from 'react';
import Slider from '../components/Slider';

export default class Slider_Page extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <div className="text-center">
          <h1>SLIDER</h1>
          <p><strong>DESCRIPTION:</strong>
            to be done.
          </p>
        </div>

        <div>
          <h1>EXAMPLE 1</h1>
          <p>A simple slider</p>
          <Slider />
        </div>

        <div>
          <h1>EXAMPLE 2</h1>
          <p>A simple slider, that shows the max and mins</p>
          <Slider ends />
        </div>

        <div>
          <h1>EXAMPLE 3</h1>
          <p>A simple slider, that shows the max and mins, and the value</p>
          <Slider ends showValue />
        </div>

      </div>
    );
  }
}
