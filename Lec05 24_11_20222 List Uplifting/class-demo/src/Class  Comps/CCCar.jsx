import { Component } from "react";

export default class CCCar extends Component {
  constructor(props) {
    super(props);

    let num7; //local varlieble
    this.number = 8; //field
    this.state = {
      lp: this.props.lp,
      speed: this.props.speed,
      model: this.props.model,
      id: this.props.id
    };
  }

  btnAddSpeed = () => {
    console.log('before', this.state.speed);
    //this.state.speed = {this.state.speed+1}; //ERROR!
    // this.setState({
    //   speed: this.state.speed + 1,
    //   model: 'porshe',
    //   color: 'red'
    // });

    this.setState((prev) => ({
      speed: prev.speed + 1,
      model: 'porshe',
      color: 'red'
    }));
    console.log('after', this.state.speed);

    this.setState((prev) => ({
      speed: prev.speed + 1,
    }));

    console.log('after after', this.state.speed);
  }

  btnDelById = () => {
    this.props.sendId2DelFromCar(this.state.id);
  }

  render() {

    console.log('render', this.state.speed);

    return (
      <div style={{ border: 'dashed green 2px', padding: 10, margin: 5 }}>
        <div>Car</div>
        <button onClick={this.btnAddSpeed}>Add Speed</button> <br />
        id={this.state.id} <br />
        speed-props={this.props.speed} <br />
        lp= {this.state.lp} <br />
        speed = {this.state.speed} <br />
        model={this.state.model} <br />
        color={this.state.color ? this.state.color : "no color"} <br />
        number={this.number} <br />
        <button onClick={this.btnDelById} >X</button>
      </div>
    );
  }
}