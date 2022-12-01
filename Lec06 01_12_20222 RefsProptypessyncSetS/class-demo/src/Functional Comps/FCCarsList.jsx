import React from 'react';
import CCCar from '../Class  Comps/CCCar';


export default function FCCarsList(props) {

  // const getId2DelInCL = (id2Del) => {
  //   props.sendId2DelFromCL(id2Del);
  // }

  let carsStr = props.cars.map((car, ind) =>
    <CCCar id={car.id} lp={car.lp}
      speed={ parseInt( car.speed)}
      model={car.model}
      key={car.id}
      sendId2Del={()=> props.sendId2Del(car.id)}
    />);

  return (
    <div>
      <div>LIST:</div>
      {carsStr}
    </div>
  )
}
