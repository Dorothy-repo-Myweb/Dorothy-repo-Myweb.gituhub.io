import React from "react";

interface IProps {
  Nama: string;
  Kelas: string;
  Pagi: boolean;
}

class Segmen extends React.Component<IProps> {
  render() {
    return (
      <>
        <h1>Nama: {this.props.Nama}</h1>
        <h2>Kelas: {this.props.Kelas}</h2>
        <h3>Pagi/siang:{this.props.Pagi}</h3>
      </>
    );
  }
}
export default Segmen;
