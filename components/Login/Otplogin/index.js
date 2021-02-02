import React, { Component } from 'react'
import "./style.scss";
export default class OtpLogInComponent extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="otplogin d-flex justify-content-center align-items-center">
                        <div className=" otplogin_inner">
                            <p className="otp_header">Verify OTP</p>
                            <p className="otp_number">Please enter the OTP code sent to your mobile number +91 98783 87377</p>
                            <div className="otpno_container d-flex justify-content-between">
                                <input type="text" className="otp-form-input" name="otp Number" placeholder="0" />
                                <input type="text" className="otp-form-input" name="otp Number" placeholder="0" />
                                <input type="text" className="otp-form-input" name="otp Number" placeholder="0" />
                                <input type="text" className="otp-form-input" name="otp Number" placeholder="0" />
                            </div>
                            <button className="otp_verify col-md-12">VERIFY</button>   
                        </div>                       
                    </div>
                </div>
            </>
        )
    }
}
