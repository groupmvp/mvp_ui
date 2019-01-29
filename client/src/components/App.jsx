import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentClientSocketId: '',
      isPlayerOne: '',
      isPlayerTwo: '',
      playerOneSocketId: '',
      playerTwoSocketId: '',
    };
  }

  render() {
    return (
      <div>
        This is React!
      </div>
    );
  }
}
export default App;