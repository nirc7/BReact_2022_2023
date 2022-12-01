import React from 'react'

export default function FCInputs(props) {

  let txtModel = null;
  let txtSpeed = null;

  const chgModel = (e) => {
    txtModel = e.target.value;
  }

  const chgSpeed = (e) => {
    txtSpeed = e.target.value;
  }


  const btnAddCar = () => {
    props.sendSM(txtSpeed, txtModel);
  }

  return (
    <div style={{ border: 'dashed red 2px', padding: 10, margin: 5 }}>
      model: <input type="text" onChange={chgModel} /> <br />
      speed: <input type="text" onChange={chgSpeed} /> <br />
      <button className="btn btn-success" onClick={btnAddCar}>Add Car</button>
    </div>
  )
}
