import React, { Component } from 'react';

import { ContainerWrap, Button, Title } from '../Styled';

class Counter extends Component {
  state = {
    clicks: 0,
  };
  increment = () => {
    this.setState(({ clicks }) => ({ clicks: clicks + 1 }));
  };
  decrement = () => {
    this.setState(({ clicks }) => ({ clicks: clicks - 1 }));
  };

  reset = () => {
    this.setState({
      clicks: 0,
    });
  };

  render() {
    const { clicks } = this.state;
    return (
      <div>
        <ContainerWrap>
          <Button onClick={this.decrement}>-</Button>
          <Title>{clicks}</Title>
          <Button onClick={this.increment}>+</Button>
        </ContainerWrap>
        <ContainerWrap>
          <Button onClick={this.reset}>RESET</Button>
        </ContainerWrap>
      </div>
    );
  }
}

export default Counter;
