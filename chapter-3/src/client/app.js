import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class App extends React.Component {

  state = {
    price: 0,
    timer: undefined
  }

  getPrice = async () => {
    let response = undefined;
    try {
      response = await axios.get('/price');
    } catch(error) {
      console.log(error);
    }

    if (response && response.status !== 200) {
      return 0;
    }

    return response.data;
  }

  setLivePrice = async function() {
    const newPrice = await this.getPrice();

    this.setState({ price: newPrice });
  }

  componentDidMount = function() {
    const timerId = setInterval(this.setLivePrice.bind(this), 2000);

    this.setState({ timer: timerId });
  }

  componentDidUnmount = function() {
    clearInterval(this.state.timerId);
  }

  render = function() {
    return (
      <div>
        {this.state.price};
      </div>
    );
  }

}

export default App;
