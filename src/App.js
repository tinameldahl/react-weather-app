import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import Header from "./Components/Header";
import Search from "./Components/Search";
import Footer from "./Components/Footer";

import "./Components/Styling/styles.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Header />
        <Search />
        <Footer />
      </div>
    </div>
  );
}

export default App;

