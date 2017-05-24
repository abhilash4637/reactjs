import React, {Component} from 'react';
import Checkbox from '../components/Checkbox';

export default class Checkbox_page extends Component{
  render(){
    return(
      <div>

      <div className="text-center">
        <h1>Checkbox</h1>
        <p><strong>DESCRIPTION:</strong> THIS CUSTOM BUTTON COMPONENT ACTS
          JUST LIKE A REGULAR BUTTON. YOU CA ASSIGN IT TYPE OF SUBMIT OR BUTTON.
          YOU CAN ENABLE AND DISBALE IT. YOU CAN ADD EVENTS TO IT.
        </p>
      </div>

      <div>
        <h1>EXAMPLE 1</h1>
        <Checkbox label="test1"/>
        <Checkbox label="test2" checked/>

      </div>


      </div>
    );
  }
}
