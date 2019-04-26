import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";


import './App.css';


function App() {

  var propRefs = {
    topScoreLi :  React.createRef(),
    guessMsgLi : React.createRef()
  };


  return (
    <div>
      <Navbar propRefs={propRefs} />
      <Header />
      <Main propRefs={propRefs} />
      <Footer />
    </div>
  );
}

export default App;
