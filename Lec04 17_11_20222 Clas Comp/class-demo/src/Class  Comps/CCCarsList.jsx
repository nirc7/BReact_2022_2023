import { Component } from "react";

const InitcarsList = [
  { id: 1, lp: '11-22-33', model: 'BMW', speed: 200 },
  { id: 2, lp: '11-22-33', model: 'porshe', speed: 250 }
];

export default class CCCarsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: InitcarsList,
      counter: InitcarsList.length
    };
  }

  render() {
    return (
      <div>
        <div>LIST:</div>

      </div>
    );
  }
}