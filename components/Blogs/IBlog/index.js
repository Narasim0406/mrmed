import React,{useState} from 'react';
import styles from './IBlog.module.scss';
import {useRouter} from 'next/router';

function IBlog() {
    const router = useRouter();
    const {query} = router;
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
    let blogData = blogs[query.blog];
    return (
        <div className="container">
            <div className={`col-md-12 ${styles.indication}`}>
                <br/>
                <span onClick={() => router.push('/')}>Home</span> <span>&gt; Blog</span>
                <br/>
                <b>Blog</b>
                <hr/>
            </div>
            <div className="col-md-10">
                <p className={styles.iheader}>Facilisi aenean condimentum eget sed nisl</p>
                <p className={styles.date}>Posted on 16 june 2021</p>
                <img className={styles.blogImg} src={blogData.img} alt="blog"/>
                <p className={`mt-3 ${styles.blogText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et aliquet lectus tristique nunc aenean est. Arcu adipiscing pretium commodo hendrerit libero, pellentesque. Eu amet auctor faucibus vel ridiculus ultrices eget sem tempor. Eu pretium, lectus hendrerit dolor sociis nisi facilisis lobortis diam. Nunc enim diam amet magna et tincidunt nam massa leo. Odio mattis id morbi molestie scelerisque felis lorem mauris. Scelerisque tortor ac mauris pulvinar adipiscing molestie nunc diam. At porta risus purus sapien egestas viverra eget. Magna urna at sit.</p>
                <p className={`mt-3 ${styles.blogText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et aliquet lectus tristique nunc aenean est. Arcu adipiscing pretium commodo hendrerit libero, pellentesque. Eu amet auctor faucibus vel ridiculus ultrices eget sem tempor. Eu pretium, lectus hendrerit dolor sociis nisi facilisis lobortis diam. Nunc enim diam amet magna et tincidunt nam massa leo. Odio mattis id morbi molestie scelerisque felis lorem mauris. Scelerisque tortor ac mauris pulvinar adipiscing molestie nunc diam. At porta risus purus sapien egestas viverra eget. Magna urna at sit.</p>
                <b>Lorem ipsum dolor sit amet, consectetur </b>
                <p className={`mt-3 ${styles.blogText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et aliquet lectus tristique nunc aenean est. Arcu adipiscing pretium commodo hendrerit libero, pellentesque. Eu amet auctor faucibus vel ridiculus ultrices eget sem tempor. Eu pretium, lectus hendrerit dolor sociis nisi facilisis lobortis diam. Nunc enim diam amet magna et tincidunt nam massa leo. Odio mattis id morbi molestie scelerisque felis lorem mauris. Scelerisque tortor ac mauris pulvinar adipiscing molestie nunc diam. At porta risus purus sapien egestas viverra eget. Magna urna at sit.</p>
                <b>Lorem ipsum dolor sit amet, consectetur </b>
                <p className={`mt-3 ${styles.blogText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et aliquet lectus tristique nunc aenean est. Arcu adipiscing pretium commodo hendrerit libero, pellentesque. Eu amet auctor faucibus vel ridiculus ultrices eget sem tempor. Eu pretium, lectus hendrerit dolor sociis nisi facilisis lobortis diam. Nunc enim diam amet magna et tincidunt nam massa leo. Odio mattis id morbi molestie scelerisque felis lorem mauris. Scelerisque tortor ac mauris pulvinar adipiscing molestie nunc diam. At porta risus purus sapien egestas viverra eget. Magna urna at sit.</p>
                <p className={`mt-3 ${styles.blogText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et aliquet lectus tristique nunc aenean est. Arcu adipiscing pretium commodo hendrerit libero, pellentesque. Eu amet auctor faucibus vel ridiculus ultrices eget sem tempor. Eu pretium, lectus hendrerit dolor sociis nisi facilisis lobortis diam. Nunc enim diam amet magna et tincidunt nam massa leo. Odio mattis id morbi molestie scelerisque felis lorem mauris. Scelerisque tortor ac mauris pulvinar adipiscing molestie nunc diam. At porta risus purus sapien egestas viverra eget. Magna urna at sit.</p>
            </div>
        </div>
    )
}

export default IBlog
