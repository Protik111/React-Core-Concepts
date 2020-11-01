import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const person = {
    name : "Protik",
    age : 20
  }
  var style = {
    color : 'red'
  }
  const products = [
    {names : 'Photoshop', prices : '$99.99'},
    {names : 'Pdf', prices : '$49.99'},
    {names: 'Vscode', prices : '$55.99'}
  ]
  const Workers = ['Protik' ,'Rafiur', 'Rahman', 'Hossain']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
       <p>My first react app</p>
       <Users></Users>
       <Count></Count>
       <ul>
         {
           Workers.map(worker =><li>{worker}</li>)
         }
         {
           products.map(product => <li>{product.names}</li>)
         }
       </ul>

       {/* dynamically passing with map start*/}
       {
         products.map(pd=> <Product product={pd}></Product>)
       }
       {/* dynamically passing with map end*/}

       {/* dynamically pass start */}
       <Product name={products[0].names} price={products[0].prices}></Product>
       <Product name={products[1].names} price={products[1].prices}></Product>
       {/* dynamically pass end */}


       <Persons name="Rayn Dahl" job="Coding"></Persons>
       <Persons name="Bendon Rei" job="Programming"></Persons>
       <h1 className="" style={style}>Name : {person.name+" "+person.age}</h1>
      </header>
    </div>
  );
}

function Product(profs){
  const productStyle = {
    border: '2px solid  blue',
    width: '200px',
    height: '200px',
    borderRadius: '8px',
    margin :'5px'
  }
  // const {name, price} = profs.products;

  return(
    <div style={productStyle}>
      {/* we can pass full object instead */}
      <h3>{profs.name}</h3> 
      <h4>{profs.price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => setUsers(data));
  }, [])
  
  return(
    <div>
      <h3>Dynamic Data : {users.length}</h3>
      <ol>
        {
          users.map(user => <li>Name : {user.name}</li>)
        }
        {
          users.map(user => <li>Phone : {user.phone}</li>)
        }
      </ol>

    </div>
  )
}

function Count(){
  const [count, setCount] = useState(0);
  const countIncrease = () => {
    const newCount = count + 1
    setCount(newCount);
  }
  const countDecrease= () => {setCount(count-1)}
  return (
    <div>
      <h3>Count : {count}</h3>
      <button onClick={countIncrease}>Increase</button>
      <button onClick={countDecrease}>Decrease</button>
    </div>
  )
}

function Persons(profs){
  const PersonsStyle = {
    color : 'cyan',
    border : '2px solid grey',
    margin : '10px'
  }
            return (<div style={PersonsStyle}>
            <h2>Name : {profs.name}</h2>
            <h3>Job : {profs.job}</h3>
            </div>)
}

export default App;
