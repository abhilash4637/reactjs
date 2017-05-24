import React, {Component} from 'react';
import ToggleButton from '../components/toggleButton';

export default class ToggleButton_Page extends Component{
  render(){
    return(
      <div>

        <div className="text-center">
          <h1>TOGGLE BUTTON</h1>
          <p><strong>DESCRIPTION:</strong>
            THIS TOGGLE BUTTON TOGGLES BETWEEN ON AND OFF (TRUE OR FALSE).
          </p>
        </div>

        <div>
          <h1>EXAMPLE 1</h1>
          <p>A TOGGLE COMPONENT</p>
          <ToggleButton/>
        </div>

        <div>
          <h1>EXAMPLE 2</h1>
          <p>A TOGGLE COMPONENT SETTING INITIAL STATEMENT</p>
          <ToggleButton set={true} />
        </div>

      </div>
    );
  }
}
