import React from "react";
import "./App.css";

export class App extends React.Component {
  render() {
  return <div>{JSON.stringify(this.props.page)}</div>;
  }
}
