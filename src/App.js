import React from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Footer from "./Components/Footer";
import Forecast from "./Components/Forecast";
import "./Components/Styling/styles.css";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Header />
        <Search />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;

