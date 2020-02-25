import React from "react";
import "./GalleryComponent.css";
import { SliderComponent } from "../SliderComponent/SliderComponent";

export class GalleryComponent extends React.Component {
  render() {
    return (
      <section className="row">
        <div className="pl-md-0 col">
          <div className="row">
            <div className="col gallery_title">{this.props.metadata.title}</div>
          </div>
          <SliderComponent
            images={this.props.metadata.images}
            slidesPerView={this.props.metadata.slidesPerView}
          />
        </div>
      </section>
    );
  }
}
