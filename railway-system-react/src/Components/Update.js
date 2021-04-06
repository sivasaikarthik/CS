import React, { Component } from "react";
import TrainDetailsServices from "./TrainDetailsServices";

class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      railwayDetails: [],
    };
  }
  componentDidMount() {
    TrainDetailsServices.getTrain().then((response) => {
      this.setState({ railwayDetails: response.data });
    });
  }

  render() {
    return <div></div>;
  }
}

export default Update;
