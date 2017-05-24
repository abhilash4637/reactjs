import React, {Component, PropTypes} from 'react';
import Button from './Button';

export default class Inc_Dec extends Component{

  constructor(props){
    super(props);
    const { incDecBy, initialValue } = props;

    this.state = {
      initialValue,
      incDecBy: incDecBy || 1
    }
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);

  }

  add() {
    const {initialValue, incDecBy} = this.state;
    this.setState({
      initialValue: this.state.incDecBy + this.state.initialValue
    });
  }

  sub() {
    const {initialValue, incDecBy} = this.state;
    this.setState({
      initialValue: this.state.initialValue - this.state.incDecBy
    });
  }

  render(){
    let {initialValue} = this.state;
    initialValue = Number(initialValue.toFixed(12));

    return(
      <div>
        <div>{initialValue}</div>
        <Button onClick={this.add}>INCREMENT</Button>
        <Button onClick={this.sub}>DECREMENT</Button>
      </div>
    );
  }
}

const {number, string} = PropTypes;
Inc_Dec.propTypes={
  initialValue: number.isRequired,
  incDecBy: number
}
