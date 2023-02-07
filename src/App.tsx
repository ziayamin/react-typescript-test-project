
import { useState } from 'react';
import './App.css';

function App() {
  const [people,setPoeple]=useState({
    name:"James",
    url:"",
    age:36,
    note:"",
  })
  return (
    <div className="App">
      <h1>People who are invited to my party.</h1>
    </div>
  );
}

export default App;
