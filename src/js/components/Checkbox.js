import React, {Component, PropTypes} from 'react';

class Checkbox extends Component{



  render(){
    const {label, checked} = this.props;
    return(
      <div>
        <label htmlFor={label}>{label}</label>
        <input type="checkbox" id={label}/>
      </div>
    );
  }
}

const {string, bool, number} = PropTypes;

Checkbox.propTypes={
  label: string.isRequired

}

export default Checkbox;
