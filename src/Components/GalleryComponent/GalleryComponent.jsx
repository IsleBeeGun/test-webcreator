import React from "react";
import "./GalleryComponent.css";
import { SliderComponent } from "../SliderComponent/SliderComponent";

export class GalleryComponent extends React.Component {
  render() {
    return (
      <section className="row bg-secondary text-light">
        <div className="col">
          <div className="row">
            <div className="col">Name here</div>
          </div>
          <SliderComponent />
          <div className="row">
            <div className="col">blank here?</div>
          </div>
        </div>
      </section>
    );
  }
}
