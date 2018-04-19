import React, { Component } from 'react';

import { ContainerWrap } from '../Styled';

class Home extends Component {
  state = {
    nameInput: '',
  };
  changeInputName = ev => {
    let value = ev.target.value;
    this.setState({ nameInput: value });
  };
  render() {
    const { nameInput } = this.state;
    return (
      <div>
        <ContainerWrap>
          <label>
            Введите ваше имя:
            <input value={nameInput} name="name" onChange={this.changeInputName} />
          </label>
        </ContainerWrap>
        <ContainerWrap>
          <p>Приветствую, {nameInput.length ? <b>{nameInput}</b> : <i>noName</i>}</p>
        </ContainerWrap>
      </div>
    );
  }
}

export default Home;
