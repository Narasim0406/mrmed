import React, { useState, useRef} from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './Feedback.module.scss'

function Feedback(){
        const [feedback,setFeedback] = useState( [
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
        ]);
        const [nav1, setNav1] = useState();
        const slider1 = useRef();

    const next = () => {
        nav1.slickNext();
    }
    const previous = () => {
        nav1.slickPrev();
    }
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
                <div className={styles.customer}>
                    <b>What Customers Saying About Us</b>
                </div>
                <div className="row">
                    <div className="previous" style={{marginTop:'145px'}}>
                        <img onClick={previous} src={'/left-arrow.png'} />
                    </div>
                    <div className="container">
                        <Slider asNavFor={nav1} ref={slider1 => setNav1(slider1)} {...settings}>
                            {feedback.map((value,index)=>{
                                return(
                                    <div key={index}>
                                        <img className={styles.feedbackImg} src={'/feedback-1.png'} />
                                        <img className={styles.playImg} src={'/play.png'} />
                                        <div className={styles.feedback}>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <img className={styles.feedbackProfile} src={'/profile.jpeg'} />
                                                </div>
                                                <div className="col-md-5">
                                                    <div className={styles.userDetail}>
                                                        <b className={styles.userName}>{value.name}</b>
                                                        <div className={styles.userLocation}>
                                                            <span>{value.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-5">
                                                    <div className={styles.feedbackStar}>
                                                        <img src={'/star.png'} />
                                                        <img src={'/star.png'} />
                                                        <img src={'/star.png'} />
                                                        <img src={'/star.png'} />
                                                        <img src={'/star.png'} />
                                                    </div>
                                                </div>
                                            </div>
                                            <p>
                                                {value.content}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                    <div className="next" style={{marginTop:'145px'}}>
                        <img onClick={next} src={'/right-arrow.png'} />
                    </div>
                </div>
            </div>
        );
}

export default Feedback;