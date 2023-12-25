## Output of the Assignment 

# 01 Create a component named "Person" that take two props - "name" and "age" The component should be display the person name and age in Paragraph element.

# Create a Component Person

import React from "react";

function Person(props) {
    const name = 'Sunil Kumar Kashyap'
    const age = 22
    return (
        <>
            <p>My Name is {name} </p>
            <p>I am {age} years old</p>

            <h1>Welcome to the React Course </h1>           
            <p>Hello My Dear <br/> 
                My Name is {props.name}. I am a {props.age} old.
            </p>

        </>
    )
}

export default Person;

 
# Import in App.jsx
import './App.css'
import Person  from './Component/Person'
function App() {
  

  return (
    <>
       <h1>Welcome to the PW SKill</h1>
       <Person name="Sunil Kumar Kashyap" age = '20'/>
      
    </>
  )
}

export default App

# Output src/ Output / 01.pnj

## 02 Create a Component name "Button" that take two props "text" and "onClick". the Component sholud be display a button element with the given text and call the function when clicked.

1. Create a Component name Button
import React from "react";


function Button(props) {
    return (
        <>
           <button onClick={props.onClick}>
                {props.text}
            </button> 
        </>
    );
};

export default Button;

2. App.jsx Redner Button Elent

import './App.css'
import Button from './Component/Button'
function App() {
  return (
    <>
       <Button
        text= "Clicked Me"
        onClick = {() => console.log("Button is Clicked")}
       />
      
    </>
  )
}

export default App

 ## 03 Creata a Component name Header that takes one Props "title" . the title component should displayu a header element with the given title .

 1. Create a component Header 

 import React from "react";

function Header(props){
    return (
        <>
            <h1 className="header">
                {props.title}
            </h1>

        </>
    )
}

export default Header;

2. Render component in App.jsx

import './App.css'
import Header from './Component/Header'
function App() {
  return (
    <>
       <Header title = "Welcome to the PW Skill"/>
      
    </>
  )
}

export default App


## 04 Creata a component name "List " that takes one Props items. the component should display an unordered list element with the given list items 
1. Create a List Component 

import React from 'react';

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;

2 Render in List 

import React from 'react';
import List from  './Component/List'

const App = () => {
  const items = ['banana', 'mango', 'orange'];

  return (
    <>
      <h1>List of Fruits</h1>
      <List items={items} />
    </>
  );
};

export default App;















