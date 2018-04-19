import React, { Component, Fragment } from 'react';
import { Button, BlockCenter } from '../Styled';
import axios from 'axios';

const URL = 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';

class Gif extends Component {
  state = {
    gif: '',
    loading: false,
  };

  componentDidMount() {
    this.loadRandomGif();
  }

  loadRandomGif = () => {
    const _this = this;
    this.setState({ loading: true });
    axios
      .get(URL)
      .then(function(res) {
        _this.setState(
          {
            gif: res.data.data.images.source.url,
          },
          () => {
            _this.setState({ loading: false });
          },
        );
      })
      .catch(function(e) {
        console.log('ERROR ', e);
      });
  };

  render() {
    const { gif, loading } = this.state;

    return (
      <Fragment>
        {loading ? (
          <span>loading...</span>
        ) : (
          <div>
            <BlockCenter>
              <Button onClick={this.loadRandomGif}>Refresh</Button>
            </BlockCenter>
            <BlockCenter>
              <img src={gif} alt="gif" width="400" height="300" />
            </BlockCenter>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Gif;
