import React, { useState } from 'react';
import styles from './Blogs.module.scss';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import {useRouter} from 'next/router';

function Blogs() {
    const router = useRouter();
    const [blogs,setBlogs] = useState([
        {
            title:'',
            content:'',
            postedDate:'',
            img:'/blog1.png'
        },
        {
            title:'',
            content:'',
            postedDate:'',
            img:'/blog2.png'
        },
        {
            title:'',
            content:'',
            postedDate:'',
            img:'/blog3.png'
        },
        {
            title:'',
            content:'',
            postedDate:'',
            img:'/blog1.png'
        },
        {
            title:'',
            content:'',
            postedDate:'',
            img:'/blog2.png'
        },
        {
            title:'',
            content:'',
            postedDate:'',
            img:'/blog3.png'
        }
    ]);
    return (
        <div className="container">
            <div className={`col-md-12 ${styles.indication}`}>
                <br/>
                <span onClick={() => router.push('/')}>Home</span> <span>&gt; Blog</span>
                <br/>
                <b>Blog</b>
                <hr/>
            </div>
            <div className={styles.blogContainer}>
                {
                    blogs.map((blog,i) => {
                        return (
                            <Card className={styles.blogCard} key={i}>
                                <CardImg className={styles.blogImg} top width="100%" src={blog.img} alt="Card image cap" />
                                <CardBody>
                                <CardTitle className={styles.blogTitle} tag="h5">Lorem Ipsum</CardTitle>
                                <CardText className={styles.blogContent}>Culpa aute ex laboris excepteur fugiat labore deserunt esse labore culpa duis. Dolore dolore veniam adipisicing ullamco sunt cupidatat est est cillum ex do.</CardText>
                                <div className="d-flex justify-content-between">
                                    <CardText>
                                        <small className={styles.textMuted}>16 june 2021</small>
                                    </CardText>
                                    <CardText color="#6054E5" onClick={() => router.push({pathname:"/IBlog",query:{blog:i}})}>
                                        <small className={styles.textMuted}>Read More</small>
                                    </CardText>
                                </div>
                                </CardBody>
                            </Card>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Blogs;
