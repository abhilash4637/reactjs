import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import AbhiLibrary from './page/AbhiLibrary';
import Button_Page from './page/Button_Page';
import Inc_dec_page from './page/Inc_dec_page';
import ToggleButton_Page from './page/ToggleButton_Page';
import Slider_Page from './page/Slider_Page';
import Checkbox_page from './page/Checkbox_page';

class App extends Component{
  render(){
    return(
      <Router history={browserHistory}>
        <Route path='/' component={AbhiLibrary}>
          <Route path='increment_decrement_page' component={Inc_dec_page}/>
          <Route path='toggle_button_page' component={ToggleButton_Page}/>
          <Route path='slider_page' component={Slider_Page}/>
          <Route path='checkbox_page' component={Checkbox_page}/>
          <IndexRoute component={Button_Page}/>
        </Route>
      </Router>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);
