import React from 'react'
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';
import Steppers from '../components/UploadPrescription/index';

function UploadStepper() {
    return (
        <div>
            <Header/>
            <Steppers/>
            <Footer/>
        </div>
    )
}

export default UploadStepper
