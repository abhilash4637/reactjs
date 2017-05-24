import React, {Component, PropTypes} from 'react';

export default class Slider extends Component{
  constructor(props){
    super(props);
    const min = props.min || 0;
    const max = props.max || 100;
    const step = props.step || 1;
    const getValue = (max < min)? min : (min + (max - min) / 2);
    this.state = {
      min,
      max,
      value: props.value || getValue,
      step
    }

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event){
    const {value} = this.refs.range
    const {onChange} = this.props;
    this.setState({
      value
    });
    if(onChange){ onChange() };

  }

  render(){

    const {value, min, max, step} = this.state;
    const {ends, showValue} = this.props;
    const slider_ends_style = {
      display: 'flex',
      flexDirection: 'row',
      input: {
        marginRight: '10px',
        marginLeft: '10px'
      }
    }

    // =========================================================================
    if(ends===true && (showValue===undefined || showValue===false)){
      return(
        <div style={slider_ends_style}>
          <span>{min}</span>
          <input
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange = {this.handleOnChange}
          ref="range"
          style={slider_ends_style.input}
          />
        <span>{max}</span>
        </div>
      );
    }
    if(ends === true && showValue===true){
      return(
        <div style={slider_ends_style}>
          <h4>{value}</h4>
          <div>
            <span>{min}</span>
            <input
            type="range"
            min={min}
            max={max}
            value={value}
            step={step}
            onChange = {this.handleOnChange}
            ref="range"
            style={slider_ends_style.input}
            />
            <span>{max}</span>
          </div>
        </div>
      );
    }
    else{
      return(
        <div>
          <input
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange = {this.handleOnChange}
          ref="range"
          />
        </div>
      );
    }
    //==========================================================================
    }
}
const {number, func, bool} = PropTypes;

Slider.propTypes = {
  value: number,
  min: number,
  max: number,
  step: number,
  onChange: func,
  ends: bool,
  showValue: bool
}
