import React, { Component } from 'react';
import './style.scss';
import { Link } from "react-router-dom";
import CarouselForAll from '../CarouselForLogIn/index';

export default class SingnInComponent extends Component {
    state={
        signup:false,
    }
    componentDidMount(){
        this.setState({signin:this.props.modal});
    }
    change = () => {
        this.setState({signup:!this.state.signup})
    }
    render() {
        let {modal,toggle} = this.props;
        return (
            <div className="signin-modal" style={{display:modal ? "block" : "none"}}>
                <div className="signin-innermodal">
                 {
                     !this.state.signup ? 
                <div className="row">
                  <div className="sign-in"></div>
                    <div className="col-md-5 signin-inner">
                        <div className="signin-input">
                            <p className="signin-header">Welcome to MrMed</p>
                            <input type="text" className="singnin-form-input" name="mobile number" placeholder="Mobile number" />
                        </div>
                        <div className="signin-btns">
                            <Link to="/auth/otpLogin/">
                                <button className="verify-btn" onClick={() => {}}>VERIFY NUMBER</button>                        
                            </Link>                                
                            <p className="no-Account">Don't have account ? <span className="register" onClick={this.change}>Register</span></p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <CarouselForAll/>
                    </div>
                </div>: 
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
                                 <p className="nosignup-Account">Already have an account ? <Link className="login_link" onClick={this.change}><span>Login</span></Link></p>
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
                }
             </div>
             </div>
        )
    }
}
