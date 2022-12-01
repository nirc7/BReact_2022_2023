import { Component } from "react";
import FCCarsList from "../Functional Comps/FCCarsList";
import FCInputs from "../Functional Comps/FCInputs";
import CCCar from "./CCCar";

const InitcarsList = [
  { id: 1, lp: '11-22-33', model: 'BMW', speed: 200 },
  { id: 2, lp: '22-22-33', model: 'porshe', speed: 250 }
];

export default class CCCarsListApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      counter: InitcarsList.length
    }; 
  }

  componentDidMount = () => {
    console.log('did mount');
    this.setState({ cars: InitcarsList });
  }

  componentWillUnmount = () => {
    console.log('unmount...');
  }

  getSM = (speed, model) => {
    let newCounter = this.state.counter + 1;
    let newCars = [...this.state.cars,
    {
      id: newCounter,
      lp: newCounter + '-22-33',
      model: model,
      speed: speed
    }];
    console.log(newCars);

    this.setState({ cars: newCars, counter: newCounter });
  }

  getId2Del = (id2Del) => {
    let newCars = this.state.cars.filter(car => car.id !== id2Del);
    this.setState({ cars: newCars });
  }

  render() {
    return (
      <div>
        <FCInputs sendSM={this.getSM} /> <br />
        <FCCarsList cars={this.state.cars} sendId2Del={this.getId2Del} />
      </div>
    );
  }
}