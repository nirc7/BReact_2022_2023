import './App.css';

const apiUrl = 'http://localhost:56977/api/students/';

function App() {

  const btnGetALL = () => {

    fetch(apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(response => {
        console.log('res=', response);
        console.log('res.status', response.status);
        console.log('res.ok', response.ok);
        return response.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          result.map(st => console.log(st.Name));
          console.log('result[0].Name=', result[0].Name);
        },
        (error) => {
          console.log("err post=", error);
        });

  }
  const btnGetId = () => {

    let userId = 2;
    fetch(apiUrl + userId, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(response => {
        console.log('res=', response);
        console.log('res.status', response.status);
        console.log('res.ok', response.ok);
        return response.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result.Name=', result.Name);
        },
        (error) => {
          console.log("err post=", error);
        });

  }
  const btnPost = () => {

    const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 88,
      Name: 'nir',
      Grade: 77
    };

    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log(result.Grade);
        },
        (error) => {
          console.log("err post=", error);
        });


  }
  const btnPut = () => {


    const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 2,
      Name: 'nir',
      Grade: 77
    };

    fetch(apiUrl + s.Id, {
      method: 'PUT',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        console.log('res=', res);
        if (res.ok) {
          console.log('updated:)');
        }
      },
        (error) => {
          console.log("err post=", error);
        });

  }
  const btnDelete = () => {
    let userId = 2;
    fetch(apiUrl + userId, {
      method: 'Delete',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8',
      })
    })
      .then(res => {
        if (res.ok) {
          console.log('updated:)');
        }
      },
      (error) => {
        console.log("err post=", error);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={btnGetALL}>GET</button> <br />
        <button onClick={btnGetId}>Get By Id</button> <br />
        <button onClick={btnPost}>Post</button> <br />
        <button onClick={btnPut}>Put</button> <br />
        <button onClick={btnDelete}>Delete</button> <br />
      </header>
    </div>
  );
}

export default App;
