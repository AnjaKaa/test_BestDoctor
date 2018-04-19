import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Home from '../Home';
import Counter from '../Counter';
import Gif from '../Gif';
import { LayoutWrap, Layout, NavBar, LinkNav, Content } from '../Styled';

class App extends Component {
  state = {
    navSelected: 'Home',
  };
  handleNavClick = event => {
    this.setState({
      navSelected: event.target.parentNode.getAttribute('name'),
    });
  };
  render() {
    const { navSelected } = this.state;
    return (
      <LayoutWrap>
        <Layout>
          <NavBar onClick={this.handleNavClick}>
            <LinkNav selected={navSelected === 'Home'} name="Home">
              <Link to={`/`}>Home</Link>
            </LinkNav>
            <LinkNav selected={navSelected === 'Counter'} name="Counter">
              <Link to={`/counter`}>Counter</Link>
            </LinkNav>
            <LinkNav selected={navSelected === 'GIF'} name="GIF">
              <Link to={`/gif`}>GIF</Link>
            </LinkNav>
          </NavBar>
          <Content>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/counter" component={Counter} />
              <Route pathName="/gif" component={Gif} />
            </Switch>
          </Content>
        </Layout>
      </LayoutWrap>
    );
  }
}

export default App;
