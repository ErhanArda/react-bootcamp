import React from 'react';
import './App.css';

import FunctionalComponent from "./components/FunctionalExample"
import ClassExample from "./components/ClassExample"

function Uygulama() {
  const girisYapildi = true;
  const person = {
    name: "John",
    age: 30
  }
  return (
    <div>
      {
        girisYapildi ?
          <div style={{ color: "red" }} className="person">Hello {person.name}, age is {person.age}</div>
          : <div>Giriş yapınız</div>
      }

      <FunctionalComponent 
      title="My Functional Component" 
      person={person}
      hobbies={["react","redux","javascript"]}
      componentExample={<span>Component Item</span>}
      />
      <ClassExample title="My Class Component" person={person}/>
    </div>
  );
}

export default Uygulama;
