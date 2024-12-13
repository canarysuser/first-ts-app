import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';

interface IGreeting {
  name: string,
  counter: number,

}

function App() {
  const [model, setModel] = useState<IGreeting>({name:'ABB', counter:999}) 
  return (
    <div className="App">
      <h1>Welcome to React with TypeScript</h1>
      <Greeting  {...model}/>
      <ShowProduct/>
    </div>
  );
}

function Greeting(props: IGreeting) { 
  return (
    <div>
      <h5>Name: {props.name}</h5>
      <h5>Counter: {props.counter}</h5>
    </div>
  )
}
//abstract class BaseClass { abstract show() : void; }

class Product {//extends BaseClass {
  constructor(
    public productId:number,
    public productName: string,
  ) { /*super();*/ }

  // override show() : void { 

  // }
  
}

function ShowProduct() {
  const [model, setModel] = useState<Product>(new Product(9999,'Markers'));
  const onHandleChange = (e:React.ChangeEvent<HTMLInputElement>) => { 
    setModel({...model, [e.target.name]:e.target.value})
  }
  return (
    <div>
      <form>
        <input type="text" name="productId" value={model.productId}
        onChange={onHandleChange}/>
      </form>
    </div>
  )

}



export default App;
