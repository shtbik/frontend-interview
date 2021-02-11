import React from "react";

const CLICKS_COUNT = 100;

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0
    };
  }

  getClicks() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(CLICKS_COUNT);
      }, 1500);
    });
  }
  componentDidMount() {
    this.getClicks().then(
      function (data) {
        this.setState({ clicked: data }, function () {
          console.log("Clicks have been successfully loaded");
        });
      }.bind(this)
    );
  }
  onClick() {
    this.setState({
      clicked: this.state.clicked + 1
    });
  }
  render() {
    return (
      <button onClick={this.onClick.bind(this)}>
        Clicked {this.state.clicked}
      </button>
    );
  }
}

export default Button;
