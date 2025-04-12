// import libraries
import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import List from "./List.jsx";
import "./App.js";

// membuat kompenen dengan class

// create component
const App =() => {
  return (
    <div> 
      <h1>Hello React</h1>
      <p> Nama Saya Dede Ahmad Rivandi</p>
      <Header />
      <List/>
      <Footer/>

    </div>
  );
};

// export default
export default App;