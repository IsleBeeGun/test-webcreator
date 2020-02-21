import React from "react";
import "./SliderComponent.css";
import Slider from "react-slick";

export class SliderComponent extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="row">
        <div className="col">
          <div>
            <h2> Single Item</h2>
            <Slider {...settings}>
              <div>
                <img
                  src="https://ibgwiki.site/img/cover-simplesnake.png"
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <img
                  src="https://ibgwiki.site/img/cover-choredoor.png"
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <img
                  src="https://ibgwiki.site/img/cover-videogrid.png"
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
              <div>
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
