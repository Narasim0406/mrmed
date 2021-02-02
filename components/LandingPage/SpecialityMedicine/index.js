import React, { Component } from 'react'

import SpecialityMed from '../SpecialityMedicine/SpecialityMed/index';
import SpecialityMedicineExtended from '../SpecialityMedicine/SpecialityMedExtended/index'
import Carousel from '../Carousel/index' 

import styles from './SpecialityMedAndCarousel.module.scss'

class SpecialityMedAndCarousel extends Component{
    constructor(props){
        super(props);
        this.state = {
            showSpecialityMed : false
        }
    }
   
    render(){
        return(
            <div>
                <div className="container">
                    {this.state.showSpecialityMed ? 
                    <div className="row">
                        <div className="col-md-12">
                            <SpecialityMedicineExtended/>
                        </div>
                    </div>
                    :
                    <div className="row">
                        <div className="col-md-5">
                            <SpecialityMed/>
                        </div>
                        <div className={`col-md-7 ${styles.specMed}`}>
                            <Carousel></Carousel>
                        </div>
                    </div>}
                </div>
                <div className="row">
                    <div className={`col-md-1 offset-md-11 ${styles.fabIcon}`}>
                        <img src={require('../../../assets/images/whatsapp-fab.png')} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SpecialityMedAndCarousel;