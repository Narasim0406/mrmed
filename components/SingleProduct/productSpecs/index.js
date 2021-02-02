import React,{ useState } from 'react'

import styles from './ProductSpecs.module.scss'

function ProductSpecs(){
    const [specsList,setSpecsList] = useState(['Overview', 'Instructions', 'Side Effects','Disclaimer']);
    const [specsListStyle, setSpecsListStyles] = useState([true,false,false,false]);
    let specsLists = specsList.map((value,index)=>{
            return(
                <li key={index} className={specsListStyle[index] ? `${styles.activeList}` : `${styles.inActiveList}` }>{value}</li>
            );
        })
        return(
            <div className={styles.productSpecification}>
                <ul>
                    {specsLists}
                </ul>
                <p className={styles.overviewContent}>
                    It is used for the treatment and prevention of antibiotic-associated diarrhea (AAD).
                    It also helps in restoring the normal microbial flora of the intestine. It
                    is useful in the treatment as well as prevention of various infections like
                    gastroenteritis (also known as infectious diarrhea) and intestinal disorders
                    which include aphthous ulcers, stomatitis, irritable bowel syndrome (IBS), and 
                    inflammatory bowel disorders (IBD). It is also recommended for treating
                    travelers’ diarrhea. It contains Streptococcus faecalis,
                    Clostridium butyricum, Bacillus mesentericus and Lactobacillus sporogenes
                    as major active ingredients. These act as probiotics that help in restoring
                    the balance of good bacteria in the intestine that may get upset after
                    antibiotic use or due to intestinal infections. It works by inhibiting or decreasing
                    the growth of harmful microorganisms in the gut.
                </p>
                <div className={styles.checkList}>
                    <img className={styles.tick} src={require('../../../assets/images/tick.png')}/>
                    <span>Streptococcus faecalis: 30 million</span>  
                </div>
                <div className={styles.checkList}>
                    <img className={styles.tick} src={require('../../../assets/images/tick.png')}/>
                    <span>Clostridium butyricum: 2 million</span>  
                </div>
                <div className={styles.checkList}>
                    <img className={styles.tick} src={require('../../../assets/images/tick.png')}/>
                    <span>Bacillus mesentericus: 1 million </span>  
                </div>
                <div className={styles.checkList}>
                    <img className={styles.tick} src={require('../../../assets/images/tick.png')}/>
                    <span>Lactic acid bacillus (Lactobacillus sporogenes): 50 million spores</span>  
                </div>
                <p className={styles.specsContent}>
                    It is advised to take this capsule as directed by your doctor. If you are taking
                    this along with antibiotics then make sure to maintain a time gap of at least 2
                    hours for effective results. It usually does not cause any side effects when
                    taken as recommended by your doctor. However, in case of an overdose of this
                    medication, it can lead to stomach complications.
                </p>
                <div className={styles.disclamier}>
                    <b>Disclamier</b>
                </div>
                <p className={styles.specsContent}>
                    The contents of this website are for informational purposes only and not intended
                    to be a substitute for professional medical advice, diagnosis, or
                    treatment. Please seek the advice of a physician or other qualified health
                    provider with any questions you may have regarding a medical condition. Do
                    not disregard professional medical advice or delay in seeking it because
                    of something you have read on this website.
                </p>
                <hr/>
            </div>  
        );
}

export default ProductSpecs;