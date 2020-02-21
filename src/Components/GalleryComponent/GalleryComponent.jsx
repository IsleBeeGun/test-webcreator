import React from "react";
import "./GalleryComponent.css";
import { SliderComponent } from "../SliderComponent/SliderComponent";

export class GalleryComponent extends React.Component {
  render() {
    return (
      <section className="row bg-secondary text-light">
        <div className="col">
          <div className="row">
            <div className="col">{this.props.metadata.title}</div>
          </div>
          <SliderComponent
            images={this.props.metadata.images}
            slidesPerView={this.props.metadata.slidesPerView}
          />
          <div className="row">
            <div className="col">blank here?</div>
          </div>
        </div>
      </section>
    );
  }
}
