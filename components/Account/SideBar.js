import React,{useState} from 'react'
import Link from 'next/link';
import styles from './Account.module.scss';
import styles1 from '../../assets/fonts/icomoon/style.module.css';

// import user from '../../assets/images/user.svg';
import {useRouter} from 'next/router';

function SideBar() {
    const router = useRouter();
    const [navLink,setNavLink] = useState([
        {
            to : '/Accounts/Profiles',
            icon : 'icon-member-card',
            label : 'MY PROFILE'
        },
        {
            to : '/Accounts/Order',
            icon : 'icon-delivery',
            label : 'MY ORDER'
        },
        {
            to : '/Accounts/MyPrescription',
            icon : 'icon-prescription',
            label : 'MY PRESCRIPTION'
        },
        // {
        //     to : '/wishlist',
        //     icon : 'icon-wishlist',
        //     label : 'WISHLIST'
        // },
        {
            to : '/Accounts/Payments',
            icon : 'icon-credit-card',
            label : 'PAYMENTS'
        },
        // {
        //     to : '/Accounts/Addresse',
        //     icon : addre,
        //     label : 'ADDRESS BOOK'
        // }
        ,
        {
            to : '/Accounts/ChangeNumbers',
            icon : 'icon-padlock',
            label : 'CHANGE NUMBER'
        },
        {
            to : '/Accounts/Invites',
            icon : 'icon-invite',
            label : 'INVITE / PEER'
        },
        {
            to : '',
            icon : 'icon-exit',
            label : 'LOGOUT'
        }
    ]);
    return (
        <div className="col-md-3">
            <div className={styles.accountDetails}>
                <ul>
                    {navLink.map((value,index)=>{
                        let{icon,to,label} = value;                        
                        return(
                            <div key={index}>
                                <Link href={to}>
                                    <li className={`${styles.accountList} ${router.pathname === to ? styles.accountActiveList:''}`}>
                                        <i className={`${styles1.icons} ${styles1[icon]}`}/>
                                        <b>{label}</b>
                                    </li>
                                </Link>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SideBar
