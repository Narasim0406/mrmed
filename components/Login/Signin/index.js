import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { userDetails,userToken } from '../../../actions'
import styles from  './SingnInComponent.module.scss';
import { Modal} from 'reactstrap';
import CarouselForAll from '../CarouselForLogIn/index';
import jwt_decode from "jwt-decode";
import {auth_url} from '../../../apiVariables';

export default function SingnInComponent(props){
    const dispatch = useDispatch();
    let [token,setToken] = useState("");
    const [decoded,setDecoded] = useState({});
    const [which, setWhich] = useState(0);
    const [emailIdMobileNo, setemailIdMobileNo] = useState("");
    const [otp,setOtp] = useState({
        code1:"",
        code2:"",
        code3:"",
        code4:"",
        code5:"",
        code6:""
    })
    const [signUpData,setSignUpData] = useState({
        name:'',
        emailId:'',
        phoneNo:'',
        mobileVerifyStatus:1,
        userTypeId: 3
    });
    useEffect(() => {
        setWhich(0);
    },[]);
    const handelSignIn = () => {
        setWhich(0)
    }
    const handelSignUp = () => {
        setWhich(1)
    }
    const handelOtp = () => {
        setWhich(2)
    }
    const onChangeForm = (e) => {
        const {name , value} = e.target
        setSignUpData( prevState => ({
        ...prevState,
        [name] : value
        }))
    }
    const onChangeOtp = (e) => {
        const {name , value} = e.target
        setOtp( prevState => ({
        ...prevState,
        [name] : value
        }))
    }
    const handleSignInData = async(e) => {
        e.preventDefault();
        const url = `${auth_url}/user/signInByEmailPhone`;
        let isNewUser = emailIdMobileNo === signUpData.phoneNo ? true : false;
        let data = isNewUser ? {emailIdMobileNo,isNewUser} :  {emailIdMobileNo};
        console.log(data);
        let res = await httpPostRequest(url,data);
        console.log(res);
        if(res.status === 200 ) {
            alert(res.message)
            handelOtp();
        }else if(res.status==404){
            alert("mobile or email not registered")
        }
    }
    const verifyOtp = async(e) => {
        e.preventDefault();
        const url = `${auth_url}/user/verifySignInByEmailPhone`;
        let code = otp.code1+otp.code2+otp.code3+otp.code4+otp.code5+otp.code6;
        let isNewUser = emailIdMobileNo === signUpData.phoneNo ? true : false;
        let data = {emailIdMobileNo,isNewUser,code};
        let res = await httpPostRequest(url,data);
        console.log(res);
        if(res.status === 200 ) {
            alert(res.message);
            setOtp({
                code1:"",
                code2:"",
                code3:"",
                code4:"",
                code5:"",
                code6:""
            });
            signUp();
        }else{
            alert("otp verification failed")
        }
    }
    const signUp = async() => {
        const url = `${auth_url}/user/signup`;
        let data = signUpData;
        let res = await httpPostRequest(url,data);
        console.log(res);
        if(res.status === 200 ) {
            alert(res.message);
            setToken(res.data.token);
            var decodeds = await jwt_decode(token);
            setDecoded(decodeds);
            dispatch(userDetails(decoded));
            dispatch(userToken(token));
            console.log(decoded);
            //res.data.userData
        }else if(res.status===400){
            alert("User Already has Registered");
        }
        console.log(signUpData);
        setSignUpData({
            name:'',
            emailId:'',
            phoneNo:'',
            userTypeId:1,
            mobileVerifyStatus:1
        });
    }
    const handleSignUpData = async(e) => {
        e.preventDefault();
        handelSignIn();
        setemailIdMobileNo(signUpData.phoneNo);
    }
    const httpPostRequest = async(url, body) => {
        console.log(body)
        let result = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return await result
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
                        <CarouselForAll/>
                    </div>
                </div>:""}
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
                                        name="phoneNo" 
                                        placeholder="MobileNumber" 
                                        value={signUpData.phoneNo}
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
                      <CarouselForAll/>
                   </div>
               </div> :""
                }
                {
                    which === 2 ? <div className="row">
                    <div className="col-md-5">
                        <div className={styles.otpLogin_inner}>
                            <div className={styles.textContent}>
                                <p className={styles.otp_header}>Verify OTP</p>
                                <p className={styles.otp_number}>Please enter the OTP code sent to your <br/> mobile number +91 98783 87377</p>
                            </div>
                            <form method="post" onSubmit={verifyOtp}>
                                <div className={styles.otpno_container}>
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
                      <CarouselForAll/>
                   </div>
                </div> 
                : ""
                }
             </Modal>
        )
}
