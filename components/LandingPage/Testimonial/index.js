import React, { Component } from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from '../Testimonial/Testimonial.module.scss'

class Testimonial extends Component {
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = {
            testimonial : [
                {
                    title : 'Super Fast Delivery',
                    content : 'Lorem ipsum dolor sit amet, consectetur  amet adipiscing elit. Laoreet justo, suspendisse dui, est a amet elementum diam nisl.',
                    name : 'John Doe',
                    location : 'Chennai'
                },
                {
                    title : 'Super Fast Delivery',
                    content : 'Lorem ipsum dolor sit amet, consectetur  amet adipiscing elit. Laoreet justo, suspendisse dui, est a amet elementum diam nisl.',
                    name : 'John Doe',
                    location : 'Chennai'
                },
                {
                    title : 'Super Fast Delivery',
                    content : 'Lorem ipsum dolor sit amet, consectetur  amet adipiscing elit. Laoreet justo, suspendisse dui, est a amet elementum diam nisl.',
                    name : 'John Doe',
                    location : 'Chennai'
                },
                {
                    title : 'Super Fast Delivery',
                    content : 'Lorem ipsum dolor sit amet, consectetur  amet adipiscing elit. Laoreet justo, suspendisse dui, est a amet elementum diam nisl.',
                    name : 'John Doe',
                    location : 'Chennai'
                },
                {
                    title : 'Super Fast Delivery',
                    content : 'Lorem ipsum dolor sit amet, consectetur  amet adipiscing elit. Laoreet justo, suspendisse dui, est a amet elementum diam nisl.',
                    name : 'John Doe',
                    location : 'Chennai'
                },
                {
                    title : 'Super Fast Delivery',
                    content : 'Lorem ipsum dolor sit amet, consectetur  amet adipiscing elit. Laoreet justo, suspendisse dui, est a amet elementum diam nisl.',
                    name : 'John Doe',
                    location : 'Chennai'
                },
                {
                    title : 'Super Fast Delivery',
                    content : 'Lorem ipsum dolor sit amet, consectetur  amet adipiscing elit. Laoreet justo, suspendisse dui, est a amet elementum diam nisl.',
                    name : 'John Doe',
                    location : 'Chennai'
                },
                {
                    title : 'Super Fast Delivery',
                    content : 'Lorem ipsum dolor sit amet, consectetur  amet adipiscing elit. Laoreet justo, suspendisse dui, est a amet elementum diam nisl.',
                    name : 'John Doe',
                    location : 'Chennai'
                },
                {
                    title : 'Super Fast Delivery',
                    content : 'Lorem ipsum dolor sit amet, consectetur  amet adipiscing elit. Laoreet justo, suspendisse dui, est a amet elementum diam nisl.',
                    name : 'John Doe',
                    location : 'Chennai'
                }
            ]
        }
    }
    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return (
            <div>
                <div className={`container ${styles.testimonial}`}>
                    <b>Testimonials</b>
                </div>
                <div className="row d-flex flex-row">
                    <div className="previous" style={{marginTop:'115px'}}>
                        <img onClick={this.previous} src={require('../../../assets/images/left-arrow.png')} />
                    </div>
                    <div className="container">
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            {this.state.testimonial.map((value,index)=>{
                                return(
                                    <div key={index} className={styles.testimonialBox}>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className={styles.testimonialTitle}>
                                                    <b>{value.title}</b>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className={styles.starTestimonial}>
                                                    <img src={require('../../../assets/images/star.png')} />
                                                    <img src={require('../../../assets/images/star.png')} />
                                                    <img src={require('../../../assets/images/star.png')} />
                                                    <img src={require('../../../assets/images/star.png')} />
                                                    <img src={require('../../../assets/images/star.png')} />
                                                </div>
                                            </div>
                                        </div>                
                                        <p>
                                            {value.content}
                                        </p>
                                        <div className="row">
                                            <div className="col-md-2 col-2">
                                                <img className={styles.testimonialProfile} src={require('../../../assets/images/profile.jpeg')} />
                                            </div>
                                            <div className="col-md-10 col-10">
                                                <b className={styles.userName}>{value.name}</b>
                                                <div className={styles.userLocation}>
                                                    <span>{value.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                    <div className="next" style={{marginTop:'115px'}}>
                        <img onClick={this.next} src={require('../../../assets/images/right-arrow.png')} />
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Testimonial;