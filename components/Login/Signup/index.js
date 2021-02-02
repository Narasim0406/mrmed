import React, { Component } from 'react'
import './style.scss';
import { Link } from "react-router-dom";
import { Modal} from 'reactstrap';
import CarouselForAll from '../CarouselForLogIn/index';
export default class SignUpComponent extends Component {
    render() {
        return (
            <>
                <div className="row signup">
                        <div className="col-md-5 signup-inner">
                                <div className="signup-content">
                                    <p className="signup-header">Welcome to MrMed</p>
                                    <p className="register">Register</p>
                                    <div className="signup-main">
                                            <input type="text" className="signup-form-input" name="PersonName" placeholder="Name" />
                                            <input type="text" className="signup-form-input" name="EmailAddress" placeholder="Email Address" />
                                            <input type="text" className="signup-form-input" name="MobileNumber" placeholder="MobileNumber" />
                                    </div>
                                    <button className="sverify-btn">SIGN UP</button>
                                </div>
                                <div className="accounts-main d-flex">
                                    <div className="nosign-accooun">
                                        <p className="nosignup-Account">Already have an account ? <Link className="login_link" to=""><span>Login</span></Link></p>
                                    </div>                                
                                    <div className="signup-footer">                               
                                        <p className="terms-cont">By continuing  you agree to the to our <span>Terms of use and Privacy policy</span></p>
                                    </div>
                                </div>                                                                                            
                        </div>
                        <div className="col-md-7 caros">
                            <CarouselForAll/>
                        </div>
                    </div>
            </>
        )
    }
}
