import React, {Component} from 'react';
import {Link} from 'react-router';

export default class AbhiLibrary extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">ABHI'S LIBRARY</h1>
                <h3>COMPONENTS</h3>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>BUTTON</Link>
                        </li>
                        <li>
                            <Link to='increment_decrement_page'>INCREMENT_DECREMENT</Link>
                        </li>
                        <li>
                            <Link to='toggle_button_page'>TOGGLEBUTTON</Link>
                        </li>
                        <li>
                            <Link to='slider_page'>SLIDER</Link>
                        </li>
                        <li>
                            <Link to='checkbox_page'>Checkbox</Link>
                        </li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        );
    }
}
