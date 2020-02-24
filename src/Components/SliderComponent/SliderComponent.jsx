import React from "react";
import "./SliderComponent.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "@fortawesome/fontawesome-free/css/all.min.css";

// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <button
//       className={className}
//       style={{ ...style, backgroundColor: "maroon" }}
//       onClick={onClick}
//     />
//   );
// }
// function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <button
//       className={className}
//       style={{ ...style, backgroundColor: "green" }}
//       onClick={onClick}
//     />
//   );
// }
export class SliderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  back() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: this.props.slidesPerView,
      slidesToScroll: this.props.slidesPerView,
      // nextArrow: <NextArrow />,
      // prevArrow: <PrevArrow />,
      appendDots: dots => (
        <div className="row">
          <div className="col dots">
            <ul> {dots} </ul>
          </div>
        </div>
      ),
      customPaging: () => (
          <i className="fas fa-circle dot"></i>
      ),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: this.props.slidesPerView,
            slidesToScroll: this.props.slidesPerView,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 768,
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
          <Slider ref={c => (this.slider = c)} {...settings} className="row">
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
          <div className="row">
            <div className="col">
              {/* <FontAwesomeIcon className="arrow-back bg-danger" icon={faArrowAltCircleLeft} onClick={this.back}/> */}
              <div>
                <i
                  className="far fa-arrow-alt-circle-left arrow-back"
                  onClick={this.back}
                ></i>
              </div>
            </div>
            <div className="col text-center" id="dots_overlay"></div>
            <div className="col text-right">
              {/* <FontAwesomeIcon className="arrow-next bg-success" icon={faArrowAltCircleRight} onClick={this.next}/> */}
              <div>
                <i
                  className="far fa-arrow-alt-circle-right arrow-next"
                  onClick={this.next}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
