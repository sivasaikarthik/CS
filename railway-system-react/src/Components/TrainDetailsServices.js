import React, { Component } from "react";
import axios from "axios";
class TrainDetailsServices extends Component {
  getTrain() {
    return axios.get("http://localhost:9000/allTrains");
  }
  getTrainId(id) {
    return axios.get("http://localhost:9000/allTrains" + id);
  }
}

export default TrainDetailsServices;
