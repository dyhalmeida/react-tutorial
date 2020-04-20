import React from 'react';

export default class Counter extends React.Component {

  /**
   * Não Modifique o State Diretamente, utilize o setState
   * 
   * setSate é assicrono, utilize segundo argumento de callback
   * 
   * Atualizações de State São Mescladas, utlize função no lugar de objeto
   * para atualizar state
   * 
   */

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleClickIcrement() {

    this.setState({
      count: this.state.count + 1,
    }, () => console.log(this.state.count) )

    // this.setState((prevState, props) => ({
    //   count: prevState.count + 1,
    // }));

    // console.log(this.state.count);

  }
  
  handleClickFiveIcrement() {
    this.handleClickIcrement();
    this.handleClickIcrement();
    this.handleClickIcrement();
    this.handleClickIcrement();
    this.handleClickIcrement();
  }

  render() {
    return (
      <div>
        <div>Counter: { this.state.count }</div>
        <button onClick={ () => this.handleClickIcrement() }>+</button>
      </div>
    );
  }
}