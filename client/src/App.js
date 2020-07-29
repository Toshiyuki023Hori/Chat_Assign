import React,{ useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";
import {Router} from "@reach/router";

import Chat from "./components/Chat";
import Join from "./components/Join";

function App() {
  // const [socket] = useState(() => io(":8000"))
  
  // useEffect(() => {
  //   console.log("Is this running?");
  //   socket.on("Welcome", data => console.log(data));

  //   return () => socket.disconnect(true);
  // },[socket])

  return (
   <Router>
     <Chat path="/chat" />
     <Join path="/" />
   </Router>
  );
}

export default App;
