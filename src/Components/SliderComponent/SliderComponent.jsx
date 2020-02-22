import React from "react";
import "./SliderComponent.css";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="container">
      <div className={className + " row"} style={{ ...style, zindex: "5" }} onClick={onClick} />
    </div>
  )
}
export class SliderComponent extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.slidesPerView,
      slidesToScroll: this.props.slidesPerView,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: this.props.slidesPerView,
            slidesToScroll: this.props.slidesPerView,
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
          <Slider {...settings} className="row">
            {this.props.images.map((img_url, counter) => {
              return (
                <img
                  alt=""
                  src={img_url}
                  key={"img-" + counter}
                  className="col"
                />
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
