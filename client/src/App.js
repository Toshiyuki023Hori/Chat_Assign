import React,{ useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import io from "socket.io-client"；
import {Router} from "@reach/router";

function App() {
  const [socket] = useState(() => io(":8000"))
  
  useEffect(() => {
    console.log("Is this running?");
    socket.on("Welcome", data => console.log(data));

    return () => socket.disconnect(true);
  },[socket])

  return (
   <Router>
     
   </Router>
  );
}

export default App;
