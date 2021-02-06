import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { userDetails, userToken } from '../../../actions'
import styles from './SingnInComponent.module.scss';
import { Modal } from 'reactstrap';
import CarouselForAll from '../CarouselForLogIn/index';
import jwt_decode from "jwt-decode";
import { auth_url } from '../../../apiVariables';
import axios from 'axios';

export default function SingnInComponent(props) {

    const dispatch = useDispatch();
    let [token, setToken] = useState("");
    let [isSignUp, handleIsSignup] = useState(false);
    const [decoded, setDecoded] = useState({});
    const [which, setWhich] = useState(0);
    const [emailIdMobileNo, setemailIdMobileNo] = useState("");
    const [otp, setOtp] = useState({
        code1: "",
        code2: "",
        code3: "",
        code4: "",
        code5: "",
        code6: ""
    })
    const [signUpData, setSignUpData] = useState({
        name: "",
        emailId: "",
        mobileNo: "",
        userTypeId: 3,
        mobileVerifyStatus: 1
    });
    useEffect(() => {
        setWhich(0);
    }, []);
    const handelSignIn = () => {
        handleIsSignup(true)
        setWhich(0)
    }
    const handelSignUp = () => {
        handleIsSignup(true)
        setWhich(1)
    }
    const handelOtp = () => {
        setWhich(2)
    }
    const onChangeForm = (e) => {
        const { name, value } = e.target
        setSignUpData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const onChangeOtp = (e) => {
        const { name, value } = e.target
        setOtp(prevState => ({
            ...prevState,
            [name]: value
        }))
        if(value===""){
            handleBackspace(e)
        } else {
            handleEnter(e)
        }
    }
    const handleSignInData = async (e) => {
        e.preventDefault();
        handleIsSignup(false);
        const url = `${auth_url}/user/signInByEmailPhone`;
        let isNewUser = emailIdMobileNo === signUpData.mobileNo ? true : false;
        let data = isNewUser ? { emailIdMobileNo, isNewUser } : { emailIdMobileNo };
        let res = await axios.post(url, data);
        if (res.status === 200) {
            console.log(res.data);
            if (isNewUser === true) signUp();
            handelOtp();
        } else if (res.status === 404) {
            // alert(res.statusText)
        }
    }
    const verifyOtp = async (e) => {
        e.preventDefault();

        if (isSignUp === false) {
            signInVerify();
        } else {
            signUpVerify()
        }
    }

    const signUpVerify = async () => {
        const url = `${auth_url}/user/verifySignInByEmailPhone`;
        let code = otp.code1 + otp.code2 + otp.code3 + otp.code4 + otp.code5 + otp.code6;
        let isNewUser = true;
        let data = { emailIdMobileNo, isNewUser, code };
        let res = await axios.post(url, data);
        if (res.status === 200 || res.status === "success") {
            setOtp({
                code1: "",
                code2: "",
                code3: "",
                code4: "",
                code5: "",
                code6: ""
            });
            localStorage.setItem('token', res.data.data.token);
            localStorage.setItem('userData',JSON.stringify(res.data.data.userData));
            console.log(res, "verifyOtp", localStorage)

            signUp();
        } else {
            // alert("otp verification failed")
        }
    }

    const signInVerify = async () => {
        const url = `${auth_url}/user/verifySignInByEmailPhone`;
        let code = otp.code1 + otp.code2 + otp.code3 + otp.code4 + otp.code5 + otp.code6;
        let isNewUser = false;
        let data = { emailIdMobileNo, isNewUser, code };
        let res = await axios.post(url, data);
        if (res.status === 200 || res.status == "success") {
            setOtp({
                code1: "",
                code2: "",
                code3: "",
                code4: "",
                code5: "",
                code6: ""
            });

            localStorage.setItem('token', res.data.data.token);
            localStorage.setItem('userData', JSON.stringify(res.data.data.userData));
            console.log(res, "verifyOtp", localStorage)
            // if(isNewUser===false){
            //     dispatch(userDetails(res.data.data.token));
            //     dispatch(userToken(res.data.data.userData));
            // }
            props.toggle()

        } else {
            // alert("otp verification failed")
        }
    }

    const signUp = async () => {
        const url = `${auth_url}/user/signup`;
        console.log(signUpData, "signUpData");
        let res = await axios.post(url, signUpData);
        if (res.status === 200 || res.status==="success") {
            console.log(res.data, "signUp");
            dispatch(userDetails(res.data.data.token));
            dispatch(userToken(res.data.data.userData));
            props.toggle();
            setSignUpData({
                name: '',
                emailId: '',
                mobileNo: '',
                userTypeId: 3,
                mobileVerifyStatus: 1
            });
        }
        else if (res.status === 400) {
            // alert("User Already has Registered");
        }


    }
    const handleSignUpData = async (e) => {
        e.preventDefault();
        handleIsSignup(true);

        setemailIdMobileNo(signUpData.mobileNo);
        sendSignUpOtp();
    }

    const sendSignUpOtp = async () => {
        handleIsSignup(false);
        const url = `${auth_url}/user/signInByEmailPhone`;
        let isNewUser = true;
        let data = {
            "emailIdMobileNo": signUpData.mobileNo,
            "isNewUser": true
        };
        let res = await axios.post(url, data);
        if (res.status === 200 || res.status === "success") {
            handelOtp();
        }
    }

    
    function handleEnter(event) {
        console.log(event.keyCode, "sdfgsdhsdf")
        
        const form = event.target.form;
        const index = Array.prototype.indexOf.call(form, event.target);
        console.log(form, index, "sdfgsdhsdf")
        if(index!==5){
          form.elements[index + 1].focus();
          event.preventDefault();
        }
      }

      function handleBackspace(event) {
        console.log(event.keyCode, "sdfgsdhsdf")
        
        const form = event.target.form;
        const index = Array.prototype.indexOf.call(form, event.target);
        console.log(form, index, "sdfgsdhsdf")
        if(index!==0){
          form.elements[index - 1].focus();
          event.preventDefault();
        }
      }

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} className={styles.signInUpModal}>
            {
                which === 0 ?
                    <div className="row">
                        <div className="col-md-5">
                            <div className={styles.signIn}>
                                <div className={styles.signInCard}>
                                    <form method="post" onSubmit={handleSignInData}>
                                        <div className={styles.signinInput}>
                                            <p className={styles.signinHeader}>Welcome to MrMed</p>
                                            <input type="text"
                                                className={styles.singninFormInput}
                                                name="mobileNo"
                                                placeholder="Mobile number"
                                                value={emailIdMobileNo}
                                                onChange={(e) => setemailIdMobileNo(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className={styles.signinBtns}>
                                            {/* <Link to="/auth/otpLogin/"> */}
                                            <button className={styles.verifyBtn}>VERIFY NUMBER</button>
                                            {/* </Link>                                 */}
                                            <p className={styles.noAccount}>Don't have account ? <span className={styles.register} onClick={handelSignUp}>Register</span></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <CarouselForAll />
                        </div>
                    </div> : ""}
            {
                which === 1 ? <div className="row">
                    <div className="col-md-5">
                        <div className={styles.signUp}>
                            <div className={styles.signupContent}>
                                <div>
                                    <p className={styles.signupHeader}>Welcome to MrMed</p>
                                    <p className={styles.register}>Register</p>
                                    <form method="post" onSubmit={handleSignUpData}>
                                        <div className={styles.signupMain}>
                                            <input
                                                type="text"
                                                className={styles.signupFormInput}
                                                name="name"
                                                placeholder="Name"
                                                value={signUpData.name}
                                                onChange={(e) => onChangeForm(e)}
                                                required
                                            />
                                            <input
                                                type="text"
                                                className={styles.signupFormInput}
                                                name="emailId"
                                                placeholder="Email Address"
                                                value={signUpData.emailId}
                                                onChange={(e) => onChangeForm(e)}
                                                required
                                            />
                                            <input
                                                type="text"
                                                className={styles.signupFormInput}
                                                name="mobileNo"
                                                placeholder="MobileNumber"
                                                value={signUpData.mobileNo}
                                                onChange={(e) => onChangeForm(e)}
                                                required
                                            />
                                        </div>
                                        <button className={styles.sverifyBtn}>SIGN UP</button>
                                    </form>
                                </div>
                                <div className={styles.accountsMain}>
                                    <div className={styles.nosignAccooun}>
                                        <p className={styles.nosignupAccount}>Already have an account ? <span onClick={handelSignIn}>Login</span></p>
                                    </div>
                                    <div className={styles.signupFooter}>
                                        <p className={styles.termsCont}>By continuing  you agree to the to our <span>Terms of use and Privacy policy</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <CarouselForAll />
                    </div>
                </div> : ""
            }
            {
                which === 2 ? <div className="row">
                    <div className="col-md-5">
                        <div className={styles.otpLogin_inner}>
                            <div className={styles.textContent}>
                                <p className={styles.otp_header}>Verify OTP</p>
                                <p className={styles.otp_number}>Please enter the OTP code sent to your <br /> mobile number +91 {emailIdMobileNo}</p>
                            </div>
                            <form method="post" onSubmit={verifyOtp}>
                                <div className={styles.otpno_container} id="otp-screen">
                                    <input type="text"
                                        className={styles.otp_form_input}
                                        name="code1"
                                        value={otp.code1}
                                        onChange={(e) => onChangeOtp(e)}
                                        maxLength="1"
                                        required
                                        placeholder="0" />
                                    <input type="text"
                                        className={styles.otp_form_input}
                                        name="code2"
                                        placeholder="0"
                                        maxLength="1"
                                        value={otp.code2}
                                        onChange={(e) => onChangeOtp(e)}
                                        required
                                    />
                                    <input
                                        type="text"
                                        className={styles.otp_form_input}
                                        name="code3"
                                        placeholder="0"
                                        maxLength="1"
                                        value={otp.code3}
                                        onChange={(e) => onChangeOtp(e)}
                                        required
                                    />
                                    <input
                                        type="text"
                                        className={styles.otp_form_input}
                                        name="code4"
                                        placeholder="0"
                                        maxLength="1"
                                        value={otp.code4}
                                        onChange={(e) => onChangeOtp(e)}
                                        required
                                    />
                                    <input
                                        type="text"
                                        className={styles.otp_form_input}
                                        name="code5"
                                        placeholder="0"
                                        maxLength="1"
                                        value={otp.code5}
                                        onChange={(e) => onChangeOtp(e)}
                                        required
                                    />
                                    <input
                                        type="text"
                                        className={styles.otp_form_input}
                                        name="code6"
                                        placeholder="0"
                                        maxLength="1"
                                        value={otp.code6}
                                        onChange={(e) => onChangeOtp(e)}
                                        required
                                    />
                                </div>
                                <div className={styles.btnContainer}>
                                    <button className={styles.otp_verify}>VERIFY</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <CarouselForAll />
                    </div>
                </div>
                    : ""
            }
        </Modal>
    )
}
