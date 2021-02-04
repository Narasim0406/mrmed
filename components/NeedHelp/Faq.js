import React,{useState} from 'react';
import styles from './Faq.module.scss';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function Faq() {
    const toggle = (id) => {
        let faqe = faqs.map((faq) => {
            if(faq.id === id){
                faq.isOpen = !faq.isOpen;
            }
            return faq;
        });
        setFaqs(faqe);
    };
    const [faqs,setFaqs] = useState([
        {
            id:1,
            heads:"What is Feedback ?",
            content:"",
            isOpen:false
        },
        {
            id:2,
            heads:"Why Should your organisation use feedback Application?",
            content:"",
            isOpen:false
        },
        {
            id:3,
            heads:"How to Contact Us?",
            content:"",
            isOpen:false
        },
        {
            id:4,
            heads:"Trust Level for Feedback Application?",
            content:"",
            isOpen:false
        },
        {
            id:5,
            heads:"What is Feedback?",
            content:"",
            isOpen:false
        }
    ]);
    return (
        <div className={styles.faqBorder}>
            <p className={styles.faqHead}>FAQ</p>
            <p className={styles.faqSub}>Additional topics</p>
            {
                faqs.map((faq,i) => {
                    return (
                        <div key={i}>
                            <div className={styles.faqItem} style={{height:faq.isOpen ? "175px" : "62px"}}>
                                <div>
                                    <p>{faq.heads}</p>
                                    { faq.isOpen ? <img src={'/min.png'} alt="min" onClick={() => toggle(faq.id)}/> 
                                        :  <img src={'/add.png'} alt="add" onClick={() => toggle(faq.id)}/>
                                    }
                                </div>
                                <Collapse isOpen={faq.isOpen}>
                                    <div className={styles.colapseContent}>
                                        <div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non odio <br/> sodales, feugiat purus eleifend, sollicitudin ligula. Proin elit tortor, sagittis sed <br/> ultrices in </p>
                                        </div>
                                    </div>
                                </Collapse>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Faq
