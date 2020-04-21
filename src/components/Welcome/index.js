import React, { Component } from 'react';

class Welcome extends Component {

  /**
   * 4 Maneiras de event binding no React
   * 01 - { this.handleClick.bind(this) }
   * 02 - { () => this.handleClick() }
   * 03 - no construtor: this.handleClick.bind(this)
   * 04 - Propriedade como arrow function
   */

  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello',
    }

    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
    this.setState({
      message: 'Good Bye'
    });
  }

  handleClick2() {
    this.setState({
      message: 'Good Bye'
    });
  }

  handleClick3 = () => {
    this.setState({
      message: 'Good Bye'
    });
  }

  render() {
    return (
      <div>
        <h2>{ this.state.message }</h2>
        <button onClick={ this.handleClick.bind(this) }>Click</button>
        <hr/>
        <button onClick={ () => this.handleClick() }>Click</button>
        <hr/>
        <button onClick={ this.handleClick2 }>Click 2</button>
        <hr/>
        <button onClick={ this.handleClick3 }>Click 3</button>
      </div>
    );
  }

}

export default Welcome;