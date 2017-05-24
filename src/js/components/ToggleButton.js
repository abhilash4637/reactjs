import React, {Component, PropTypes} from 'react';

export default class ToggleButton extends Component{
  constructor(props){
    super(props);
    const {set} = props;
    this.state={
      toggleState: set || false
    }
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton(event){
    this.setState({
      toggleState: !this.state.toggleState
    });
  }

  render(){
    const {toggleState} = this.state;
    const showMessage= toggleState ? 'OFF' : 'ON';
    const direction = toggleState ? 'left' : 'right';
    const color = toggleState ? '#5cb85c' : '#d9534f';
    const toggleButtonStyle = {
      width: '75px',
      height: '30px',
      backgroundColor: '#e9e9e9',
      borderRadius: '25px',
      paddingLeft: '5px',
      paddingTop: '5px',
      paddingRight: '5px',
      border: '1px solid black',
      userSelect: 'none'
    };
    const spanStyle = {
      width: '20px',
      height: '20px',
      borderRadius: '100%',
      backgroundColor: color,
      float: direction,
      border: '1px solid black'
    };
    const span={
      paddingLeft: '8px'
    };
    return(
        <div style={toggleButtonStyle} onClick={this.toggleButton}>
          <div  style={spanStyle}>
          </div>
          <span style={span}>{showMessage}</span>
        </div>
    );
  }
}
const {bool} = PropTypes;
ToggleButton.propTypes={
  set: bool
}
