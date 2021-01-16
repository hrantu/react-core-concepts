import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // var person= {
  //   name:"Dr. Mahfuz",
  //   job:"Singer"
  // }
  // var person2= {
  //   name:"Eva Rahman",
  //   job:"Kokil Konthi"
  // }
  // var style ={
  //   color:'red',
  //   backgroundColor:'yellow'
  // }
  const nayoks = ['Anwar', 'Alamgir', 'Salman', 'Sakib', 'Shuvo']
  const products = [
    {name: 'Photoshop',price:'$90.99'},
    {name: 'Illustrator',price:'$60.99'},
    {name: 'PDF Reader',price:'$6.99'},
    {name: 'Premiere El',price:'$249.99'}
  ]
  const nayokNames = nayoks.map(nayok => nayok);
  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product=><li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd =><Product product={pd}></Product>)
        }

        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Person name={nayoks[1]} food="Pizza" nayika="Moushumi"></Person>
        <Person name="Jasim" nayika="Shabana"></Person>
        <Person name="BappaRaz" nayika="Cheka"></Person>
        <Person name="Elias K" nayika="Bobita"></Person>

      </header>
    </div>
  );
}

function Counter(){
  const[count, setCount] = useState(10);
  const handleIncrease = () => setCount(count +1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  
  return(
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <h5>{props.price}</h5>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  const personStyle={
    border:'2px solid red',
    margin:'10px',
    padding:'2px 20px'
  }
  return (
  <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Hero of {props.nayika}</h3>
  </div>
  )
}

export default App;
