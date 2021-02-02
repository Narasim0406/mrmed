import React from 'react';

import SpecialityMedicineAndCarousel from '../LandingPage/SpecialityMedicine/index'
import ProductList from '../../components/LandingPage/ProductList/index'
import WhyMrMed from '../../components/LandingPage/WhyMrMed/index'
import PapImported from '../../components/LandingPage/Pap&Imported/index'
import Testimonial from '../../components/LandingPage/Testimonial/index'
import Feedback from '../../components/LandingPage/Feedback/index'
import Blogs from '../../components/LandingPage/Blogs/index'
import Statitics from '../../components/LandingPage/Statitics/index'

import styles from './LandingPage.module.scss'

function LandingPageComponent(){
        return(
            <div className={styles.land}>
                <SpecialityMedicineAndCarousel/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ProductList></ProductList>
                        </div>
                    </div>
                </div>
                <div className={styles.whyBack}>
                    <WhyMrMed></WhyMrMed>
                </div>
                <div className="container">
                    <PapImported></PapImported>
                </div>
                <Testimonial></Testimonial>
                <div className={styles.feedback}>
                    <Feedback></Feedback>
                </div>
                <div className="container">
                    <Blogs></Blogs>
                </div>
                <div className={styles.feedback}>
                    <div className="container">
                        <Statitics></Statitics>
                    </div>
                </div>
            </div>
        );
}

export default LandingPageComponent;
