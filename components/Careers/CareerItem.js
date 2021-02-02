import React,{useState} from 'react';
import styles from './CareerItem.module.scss';
import {useRouter} from 'next/router';

function CareerItem() {
    const router = useRouter();
    const {job} = router.query;
    const [jobDescriptions,setJobDescriptions] = useState([
        {
            title:'Content Writer',
            work:{
                content:"Mr. Med is looking for a dynamic English language content writer to help our marketing and product teams in writing blogs, reviewing, and proof-reading marketing copy and posting and responding to social media content. As a content writer, you will be part of a dynamic team comprising of youth and experience and interact with senior management as well as marketing teams. You will enhance your writing skills and get exposed to the exponentially growing healthcare content industry. You will also learn marketing copy skills and get exposed to creating good tag lines, hashtags and social media content. ",
                workList:[
                    'Research healthcare and pharmaceutical industry trends, identify gaps and customer needs to create blog worthy topics',
                    'Creating crisp, engaging and SEO friendly healthcare blogs using a content management system',
                    'Assist the SEO team in basic keyword research to further identify topics to create written content', 
                    'Working with graphic and web designers to ensure blogs have relevant and attractive images/graphics',
                    'Review and proof-read marketing creatives', 
                    'Create, post and promote marketing social media content with relevant descriptions and hashtags',
                    'Respond to social media queries and get involved in marketing and lead generation efforts',  
                    'Train support desk executives in written English, supervise and review replies on support tickets and marketing leads via chat and other channels.' 
                ]
            },
            qualications:[
                'Excellent writing and editing skills in English', 
                'Bachelor’s degree in any field. Marketing, Journalism, English preferred',
                'Two years’ experience as an English content writer, copy writer or similar role', 
                'Portfolio of published articles is required ',
                'Healthcare experience is a major plus',
                'Passion to grow fast in a hustle mode, who is joining us to build on a vision, not to do a job',
                'Experience and passion to research industry trends and identify customer needs',
                'Ability to work independently and with others',
                'Ability to meet deadlines and strong organizational skills'
            ],
            location:"Chennai"
        },
        {
            title:'Customer Care',
            work:{
                content:"Mr. Med is looking for customer care executives to assist our customers in order fulfillment and post order support. As customer care executive, you will be the brand ambassador of Mr. Med and will be responsible for ensuring customers are always delighted by our products and services. ",
                workList:[
                    'Answering phone calls and making follow-up outbound calls', 
                    'Use support desk software (Freshdesk, etc) to effectively communicate in omni channel mode',
                    'Identifying issues and resolving within prescribed SLAs ', 
                    'Escalating issues to team leads and persistent issues directly to senior management', 
                    'Responding directly to customers’ queries via WhatsApp messages and other chat channels' 
                ]
            },
            qualications:[
                'Excellent communication skills in English, Tamil, Hindi, Telugu (English required, any three is a major plus)', 
                'Excellent writing skills in English ',
                'Bachelor’s degree in any field. Communications, English, Journalism is a plus',
                'Two years’ experience in customer care', 
                'Experience in using support desk software (Freshdesk, Zoho, Zendesk, etc) is a major plus',
                'Passion to grow fast in a hustle mode, who is joining us to build on a vision, not to do a job',
                'Ability to work independently and with others',
                'Extremely organized with strong time-management skills',
                'Should possess a temperament for handling customers with care', 
                'Ability to think and react in a dynamic, fast-paced environment.', 
                'Should be comfortable to work in shifts and on weekends',
            ],
            location:'Chennai'
        },
        {
            title:"Graphic Designer",
            work:{
                content:"Mr. Med is looking for a brilliant graphic designer with basic video editing skills who has a passion to excel in the growing design driven economy. As a graphic designer, you will be part of a dynamic team that comprises of youth and experience and will be the go-to internal person for all design requirements. It is imperative that you are a detail-oriented individual that understands the importance of every icon, every image and every creative that is part of creating the Mr. Med product. ",
                workList:[
                    'Provide creatives and imagery with a thorough understanding of colours, layouts and typography',
                    'Understand and document requirements from product, content, and marketing teams ',
                    'Provide imagery for Mr. Med product team (web and mobile): icons, logos, illustrations, thumbnails, banners, etc.', 
                    'Create marketing collaterals – flyers, posters, standees, emailers, digital marketing banners etc', 
                    'Support content team in creating engaging blogs by providing imagery',
                    'Test graphics and creatives across various media', 
                    'Amend designs post feedback',
                    'Build upon the established brand guidelines to ensure all cases are standardized', 
                    'Work with digital marketing team to understand nuances in banner design and create optimized creatives for digital banners',
                    'Basic video editing skills to create short marketing videos', 
                ]
            },
            qualications:[
                'Proven graphic design experience', 
                'Bachelor’s degree in any field. Design and Fine Arts related field is a bonus',
                'Portfolio of illustrations, creatives and other graphics is required', 
                'Experience with design software – Illustrator, Dreamweaver, Photoshop, InDesign',
                'Experience in video editing software - Final Cut Pro X, Adobe After Effect (or any other new age video editing software)', 
                'Healthcare experience is a major plus',
                'Passion to grow fast in a hustle mode, who is joining us to build on a vision, not to do a job',
                'Experience and passion to research industry trends and identify customer needs',
                'Ability to work independently and with others',
                'Ability to meet deadlines and strong organizational skills'
            ],
            location:"Chennai"
        },
        {
            title:"Lead Pharmacist",
            work:{
                content:"Mr. Med is looking for a head pharmacist to help our customers in prescription verification, order fulfillment and post order support. As the lead pharmacist you will quickly adapt to the nuances of super specialty pharma such as prescription requirements, patient assistance programs and imported medicine order fulfillment. You will also be the lead of the customer service teams and be the escalation point of contact with prescription related queries. ",
                workList:[
                    'Verifying prescriptions to ensure that there are no errors and that they are appropriate and safe for the individual patient.',
                    'Updating patient cart for directly uploaded medications', 
                    `Dispensing prescribed drugs as per the physician's instructions for online subscription orders.`,
                    'Managing high volume of prescriptions and coordinating operational activities to ensure order fulfilment', 
                    'Digitizing medicines as per the prescription.',
                    `Contacting referring physician's offices with questions regarding prescription.`,
                    'Handle customer queries, resolve issues or initiate appropriate steps such complaint escalation to relevant departments for resolution',
                    'Ensuring that medicines are correctly and safely supplied.',
                    'Manage compliance documents and documents related to NABH inspection',
                    'Manage support level queries on patient assistance program and coordinate with pharmaceutical companies and other partners to ensure patient enrolment', 
                    'Follow-up on customer leads and ensuring prescription related queries are resolved', 
                    'Random quality checks on orders', 
                    'Any other assigned from time to time', 
                ]
            },
            qualications:[
                'D. Pharm/B.Pharm with minimum of 4 years experience and minimum 2 years experience working in a pharmacy (e-Pharmacy is a plus)', 
                'Registered free license from Tamil Nadu Pharmacy Counci', 
                'Passion to grow fast in a hustle mode, who is joining us to build on a vision, not to do a job',
                'Ability to work independently and with others',
                'Extremely organized with strong time-management skills',
                'Should possess a temperament for handling customers with care', 
                'Ability to think and react in a dynamic, fast-paced environment.', 
                'Should be comfortable to work in shifts and on weekends',
            ],
            location:"Chennai"
        },
        {
            title:"Medical Content Writer",
            work:{
                content:"Mr. Med is looking for a Medical Content Writer to create content related to the various pharmaceutical products. As a medical content writer, you will work closely with a dynamic team in creating accurate technical content and review healthcare content created by junior copywriters. You will enhance your writing skills and get exposed to the exponentially growing healthcare content industry. You will also get the opportunity to help marketing teams in identifying and creating trending content",
                workList:[
                    'Create drug overview, side effects, usage and other technical information related to pharmaceuticals',
                    'Research top publications and ensure correct citations and references are documented for all technical content created',
                    'Brainstorm with senior management, SEO strategy team to create a priority list and to ensure technical content created helps marketing efforts', 
                    'Research healthcare and pharmaceutical industry trends, identify gaps and customer needs to create blog worthy topics',
                    'Review blogs, posts and other healthcare related content created by junior copywriters', 
                    'Work closely with the lead pharmacist in creating customer support manuals for various prescription related queries.',
                    'Train support desk executives in technical and prescription related queries, supervise and review replies on support tickets and marketing leads via chat and other channels.', 
                ]
            },
            qualications:[
                'B.Pharm, MBBS or any other Bachelor’s degree in medical field',
                'Excellent writing and editing skills in English', 
                'Five years’ experience, with at least one year experience as a technical content writer',
                'Portfolio of published articles is required', 
                'Passion to grow fast in a hustle mode, who is joining us to build on a vision, not to do a job',
                'Experience and passion to research industry trends and identify customer needs',
                'Ability to work independently and with others',
                'Ability to meet deadlines and strong organizational skills',
            ],
            location:"Chennai"
        }
    ]);
    const data = jobDescriptions[job];
    return (
        <div className="container">
             <div className={`col-md-12 ${styles.indication}`}>
                <br/>
                <span onClick={() => router.push('/')}>Home</span> <span>&gt; Careers</span>
                <br/>
                <b>Careers</b>
                <hr/>
            </div>
            <div className={styles.job_description}>
                <p className={styles.title}>{data.title}</p>
                <div className={styles.job_detail}>
                    <p>ID : 2345</p>
                    <p>1-2 years</p>
                    <p>{data.location}</p>
                </div>
                <div className="mt-3">
                    <b>About Mr.med</b>
                    <p className="mt-3">Mr. Med is India’s largest online pharmacy for super specialty medicines with a vision of creating a patient centric, technology enabled business. Mr. Med goes beyond the call of a pharma marketplace by providing patient centric services that help in procurement of medicines and adherence of patient assistance programs. At Mr. Med you will be working with business leaders with decades of experience in the pharmaceutical industry as well as professionals with top-tier consulting and engineering backgrounds. </p>
                </div>
                <div>
                    <b>Work you will do</b>
                    <p className="mt-3">Mr. Med is looking for customer care executives to assist our customers in order fulfillment and post order support. As customer care executive, you will be the brand ambassador of Mr. Med and will be responsible for ensuring customers are always delighted by our products and services. </p>
                    <p>Your work will entail the following: </p>
                    <ul>
                        {
                            data.qualications.map((item,i) => {
                                return <li key={i}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                <div>
                    <b>Desired Profile/ Qualifications</b>
                    <ul className="mt-3">
                        {
                            data.work.workList.map((item,i) => {
                                return <li key={i}>{item}</li>
                            })
                        }
                    </ul>
                </div>
                <p>Location: <b>{data.location}</b></p>
                <div>
                    <b>How You’ll Grow</b>
                    <p className="mt-3">We want you to develop naturally, by ensuring your strengths are complimented with challenging work experiences that help you develop into future leaders.  Our goal is to accelerate your career by providing a dynamic and ownership driven culture. We see tremendous potential in exponential growth and as the first few employees of the company, your growth will be tightly aligned to achieving business targets. </p>
                </div>
                <div>
                    <b>Mr. Med’s Culture</b>
                    <p className="mt-3">The working culture at Mr. Med is positive, dynamic, target oriented and aimed at getting the best out of our professionals. We allow the individuals to display their uniqueness by offering flexibility in their working style to make daily works done. Our culture is amalgam of start-up and an established pharmaceutical player, giving our professionals a unique experience to thrive in today’s dynamic work scenario.</p>
                </div>
            </div>
            <a href="mailto:example@gmail.com" target="_blank"><button className={styles.apply}>apply</button></a>
        </div>
    )
}

export default CareerItem;
