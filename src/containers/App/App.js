import React, { Component } from 'react';
import { connect } from 'react-redux';


@connect(
    (state, ownProps) => ({
        clicks: state.button.clicks
    })
)
export default class App extends Component {
  render() {
      return (
          <div>
              Hello Universal Redux!.
              <button onClick={() => this.props.dispatch({type: 'BUTTON_CLICK'})}>Click me</button>
              Clicks: <span>{this.props.clicks}</span>
          </div>
      );
  }
}
