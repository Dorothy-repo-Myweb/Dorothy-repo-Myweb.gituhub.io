import React from "react";
import Segmen from "./componen/Segmen";
import "./App.css";
import Counter from "./componen/Counter";
import Image from "./componen/Image";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Segmen Nama="Dorothy" Kelas="XE" Pagi={true} />
        <Counter />
        <Image />
      </div>
    );
  }
}
export default App;
