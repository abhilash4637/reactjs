import React, {Component} from 'react';
import Button from '../components/Button';

export default class Button_Page extends Component{
  constructor(props){
    super(props);
    this.state={
      submit: "",
      bool: false
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.togBool = this.togBool.bind(this);
  }

  togBool(e){
    const {bool} = this.state;
    this.setState({
      bool: !bool
    });
  }

  handleOnClick(e){
    this.setState({
      count: ++this.state.count
    });
  }

  handleOnSubmit(e){
    e.preventDefault();
    this.setState({
      submit: this.refs.input.value
    });
    this.refs.form_test.reset();

  }
  render(){
    const {count, submit, bool} = this.state;
    return(
      <div>

          <div className="text-center">
            <h1>BUTTON</h1>
            <p><strong>DESCRIPTION:</strong> THIS CUSTOM BUTTON COMPONENT ACTS
              JUST LIKE A REGULAR BUTTON. YOU CA ASSIGN IT TYPE OF SUBMIT OR BUTTON.
              YOU CAN ENABLE AND DISBALE IT. YOU CAN ADD EVENTS TO IT.
            </p>
          </div>

          <div>
            <h1>EXAMPLE 1</h1>
            <p>A REGULAR BUTTON</p>
            <Button className="button">REGULAR BUTTON</Button>
          </div>


          <div>
            <h1>EXAMPLE 2</h1>
            <p>A DISABLED BUTTON</p>
            <Button disabled>REGULAR BUTTON</Button>
          </div>


          <div>
            <h1>EXAMPLE 3</h1>
            <p>A BUTTON THAT TOGGLES BOOLEAN VALUE ON EVERY CLICK. CHECK DEVELOPER TOOLS CONOSLE</p>
            <Button onClick={this.togBool}>TOGGLE BOOLEAN VALUE</Button>
          </div>

          <div>
            <h1>EXAMPLE 3</h1>
            <p>BUTTON ALSO WORKS ON FORMS. <strong>{submit}</strong></p>
            <form ref="form_test" onSubmit={this.handleOnSubmit}>
              <label>FIRST NAME</label>
              <input type="text" ref="input" required></input>
              <Button type="submit">SUBMIT</Button>
            </form>
          </div>

          <table>
            <thead>
              <tr>
                <th>ATTRIBUTE</th>
                <th>DESCRIPTION</th>
                <th>DATATYPE</th>
                <th>REQUIRED</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TYPE</td>
                <td>DEVELOPER CAN OPTIONALLY SET TYPE TO EITHER BUTTON OR SUBMIT</td>
                <td>STRING</td>
                <td>NO</td>
              </tr>

              <tr>
                <td>AUTOFOCUS</td>
                <td>
                  AUTOFOCUS LETS YOU SPECIFY THAT THE BUTTON SHOULD
                  HAVE INPUT FOCUS WHEN THE PAGE LOADS, UNLESS THE USER OVERRIDES
                  IT, FOR EXAMPLE BY TYPING IN A DIFFERENT CONTROL. ONLY ONE
                  FORM-ASSOCIATED ELEMENT IN A DOCUMENT CAN HAVE THIS ATTRIBUTE
                  SPECIFIED.
                </td>
                <td>BOOLEAN</td>
                <td>NO</td>
              </tr>

              <tr>
                <td>DISABLED</td>
                <td>DEVELOPER has the option of indicating that the user cannot interact with the button.</td>
                <td>STRING</td>
                <td>NO</td>
              </tr>

              <tr>
                <td>TYPE</td>
                <td>DEVELOPE CAN OPTIONALLY SET TYPE TO EITHER BUTTON OR SUBMIT</td>
                <td>STRING</td>
                <td>NO</td>
              </tr>

              <tr>
                <td>TYPE</td>
                <td>DEVELOPE CAN OPTIONALLY SET TYPE TO EITHER BUTTON OR SUBMIT</td>
                <td>STRING</td>
                <td>NO</td>
              </tr>

              <tr>
                <td>TYPE</td>
                <td>DEVELOPE CAN OPTIONALLY SET TYPE TO EITHER BUTTON OR SUBMIT</td>
                <td>STRING</td>
                <td>NO</td>
              </tr>
            </tbody>

          </table>
      </div>
    );
  }
}
