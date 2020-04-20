import React, { Component } from 'react';

class Welcome extends Component {

  render() {
    console.log(this.props.children)
    return (
      <div>
        <h2>Welcome {this.props.firstname} {this.props.lastname}</h2>
        {this.props.children}
      </div>
    );
  }

}

export default Welcome;