import React from "react";
import "./App.css";
import {GalleryComponent} from "../GalleryComponent/GalleryComponent";
import {GridComponent} from "../GridComponent/GridComponent";
import {FormComponent} from "../FormComponent/FormComponent";

export class App extends React.Component {
  render() {
    return (
      <div>
        <header className="container bg-dark text-white">header</header>
        <div className="container">
          <GalleryComponent />
          <GridComponent />
          <FormComponent />
        </div>
        <footer className="container bg-dark text-white">footer</footer>
      </div>
    )
  }
}
