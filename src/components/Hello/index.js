import React from 'react';

const Hello = (props) => {

    /**
     * Props são somente leituras
     * Função e Class nunce deve modificar
     * suas próprias props
     */
    return (
      <div>
        <h1>Hello {props.name}</h1>
        {props.children}
      </div>
    );

}

export default Hello;