import React,{useState} from 'react';
import styles from './Careers.module.scss';
import {useRouter} from 'next/router';

export default function Careers() {
    const router = useRouter();
    const [careersList, setCareersList] = useState([
        {
            job:'Content Writer',
            loc:'Chennai'
        },
        {
            job:'Customer Care',
            loc:'Chennai'
        },
        {
            job:'Graphic Designer',
            loc:'Chennai'
        },
        {
            job:'Lead Pharmacist',
            loc:'Chennai'
        },
        {
            job:'Medical Content Writer',
            loc:'Chennai'
        }
    ]);

    return (
        <div className="container">
            <div className={`col-md-12 ${styles.indication}`}>
                <br/>
                <span onClick={() => router.push('/')}>Home</span> <span>&gt; Careers</span>
                <br/>
                <b>Careers</b>
                <hr/>
            </div>
            <p className={styles.heading}>Open positions</p>
            <div className={styles.careers_list}>
                {
                    careersList.map((career,i) => {
                        return (
                        <div key={i} className={styles.career_Box}>
                            <div>
                                <p>{career.job}</p>
                                <img 
                                onClick={() => router.push({pathname:'/CareerPage',query:{job:i}})}
                                src={require('../../assets/images/goto.png')} 
                                alt="goto"/>
                            </div>
                            <p>{career.loc}</p>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}
