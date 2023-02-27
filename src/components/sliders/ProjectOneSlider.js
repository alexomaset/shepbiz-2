import Link from "next/link";
import { Component } from "react";
import Slider from "react-slick";
import { projectsSliderOne } from "../../sliderProps";
export default class ProjectOneSlider extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    return (
      <section className="projects-section pt-130 pb-95 p-r z-1">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-8 col-md-9">
              <div className="section-title section-title-left mb-60 wow fadeInLeft">
                <span className="sub-title">Project Gallery</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="project-arrows mb-60 float-md-right wow fadeInRight">
                <div className="prev slick-arrow" onClick={this.previous}>
                  <i className="far fa-angle-left" />
                </div>
                <div className="next slick-arrow" onClick={this.next}>
                  <i className="far fa-angle-right" />
                </div>
              </div>
            </div>
          </div>
          <Slider
            ref={(c) => (this.slider = c)}
            {...projectsSliderOne}
            className="projects-slider-one"
          >
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/pics/port_2.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInDown">
              <div className="img-holder">
                <img
                  src="assets/images/pics/port_16.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                  src="assets/images/pics/port_3.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInDown">
              <div className="img-holder">
                <img
                   src="assets/images/pics/port_4.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                   src="assets/images/pics/port_5.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                   src="assets/images/pics/port_6.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                   src="assets/images/pics/port_7.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                   src="assets/images/pics/port_8.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                   src="assets/images/pics/port_9.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                   src="assets/images/pics/port_10.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                   src="assets/images/pics/port_11.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                   src="assets/images/pics/port_12.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                   src="assets/images/pics/port_13.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                   src="assets/images/pics/port_14.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                   src="assets/images/pics/port_5.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                   src="assets/images/pics/port_15.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
            <div className="project-item wow fadeInUp">
              <div className="img-holder">
                <img
                   src="assets/images/pics/port_17.jpg"
                  alt="Gallery Image"
                />
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
