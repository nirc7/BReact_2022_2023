
export default function FCStudent(props) {

  let WBonus = props.grade + 5;
  //props.grade = 200; // ERROR READ ONLY!

  function btnAddOne() {
    WBonus++;
    console.log(WBonus);
  }

  function cnhTxt(e) {
    console.log(e.target.value);
  }

  if (75 < WBonus) {
    return (
      <div>
        Student
        id = {props.id} <br />
        name = {props.name} <br />
        grade = {props.grade} <br />
        WBonus = {WBonus} <br />
        <button onClick={btnAddOne}>Add One</button>
        <input type="text" onChange={cnhTxt} />
      </div>
    );
  }
  else {
    return (
      <div>no over 75!!!</div>
    );
  }
}