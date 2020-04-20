import React, { Component } from 'react';

class Welcome extends Component {

  /**
   * O state do componente é similar as props, 
   * mas é privado e totalmente controlado pelo componente.
   */

  constructor(props) {
    super(props);
    this.state = {
      message: 'Click the button below to subscribe',
    }
  }

  handleClick() {
    this.setState({
      message: 'Subscription successful'
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome { this.props.firstname } { this.props.lastname }</h2>
        <p>{this.state.message}</p>
        <button onClick={ () => this.handleClick() }>Subscribe</button>
      </div>
    );
  }

}

export default Welcome;