// export {OrderSuccess} from './OrderSuccessFull/index';
// export {Address} from './Address/index';
// export {Payment} from './Payment/index';
// //export {UploadPrescriptions} from './UploadPrescriptions/index';
import React, { useState } from 'react';

import CartStepper from "./Stepper/index"; 
import styles from './CartDetails.module.scss';
import {useRouter} from 'next/router';
import { useDispatch, useSelector} from 'react-redux';
import { uploadPrescriptions } from '../../actions';

export default function StepperMain(){
   const [currentStep,setCurrentStep] = useState(2);
   const router = useRouter();
   const dispatch = useDispatch();
  const handleClick = (clickType) => {
    let newStep = currentStep;
    clickType === "next" ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= 5) {
      setCurrentStep(newStep);
    }
  }

  const handleDispatch = async(data) => {
    console.log("fdgsdfgsdfg", data)
    await dispatch(uploadPrescriptions(data))
  }

  return (
      <div className="App">
         {/* <Address/> 
         <OrderCancellation/> 
         <Payment/>  */}
         {/* <SwiperDemo/> */}
         {/* <PaymentSuccess/> */}
         <div className="container">
          <div className={`col-md-12 ${styles.indication}`}>
              <br/>
              <span onClick={() => router.push('/')}>Home &gt;</span><span>Cart Details</span>
              <br/>
              <b>My Cart</b>
              <hr/>
            </div>
         </div>
          <div className={styles.stepperContainerHorizontal}>
            <CartStepper
              direction="Horizontal"
              currentStepNumber={currentStep - 1}
              steps={stepsArray}
              stepColor="#6054E5"
              handleStepper={() => handleClick("next")}
              dispatch={(data)=>handleDispatch(data)}
            />
          </div>
  
          <div className={styles.buttonsContainer}>
            <button className={styles.prevBtn} onClick={() => handleClick()}>Previous</button>
            <button className={styles.nextBtn} onClick={() => handleClick("next")}>Next</button>
          </div>
      </div>
    );
  }

const stepsArray = [
  // "Create your account",
  "Uploaded Prescription",
  "My Cart",
  "Add Address",
  "Order Summary",
  "Payment"
];

