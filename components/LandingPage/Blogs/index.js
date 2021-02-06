import React, {useState } from 'react'

import styles from '../Blogs/Blogs.module.scss'

function Blogs(){
    const [news,setNews] = useState( [
        {
            title : 'A Faster Medicine delivery',
            content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
            date : 'Nov 15,2020'
        },
        {
            title : 'A Faster Medicine delivery',
            content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
            date : 'Nov 15,2020'
        },
        {
            title : 'A Faster Medicine delivery',
            content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
            date : 'Nov 15,2020'
        }
    ]);
           
        return(
            <div>
                <div className={styles.blog}>
                    <b>Stay Updated To Our Blog  &amp; News</b>
                </div>
                <div className="row">
                    {news.map((value,index)=>{
                        return(
                            <div key={index} className={`col-md-4 ${styles.news}`}>
                                <img src={'/faster-med.png'} />
                                <div>
                                    <span>Nov 15,2020 </span>
                                </div>
                                <div>
                                    <b>A Faster Medicine delivery</b>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                                </p>                      
                            </div>
                        );
                    })}
                </div>
                <div className={styles.btn}>
                        <button className={styles.viewBtn}>view more</button>
                </div>
            </div>
        );
    }


export default Blogs;