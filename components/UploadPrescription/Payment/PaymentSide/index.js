import React, { useState } from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import styles from './PaymentSide.module.scss'; 

export default function PaymentSide(){
    const [activeLink, setActiveLink] = useState(null);
    const router = useRouter();
    const [links,setLinks] = useState([
        {
            id:1,
            path:'/payments/wallet',
            name:'Wallets',
            className: "side_nav_item"
        },
        {
            id:2,
            path:'/payments/CreditDebitCards',
            name:'Credit/debit Card',
            className: "side_nav_item"
        },
        {
            id:3,
            path:'/payments/NetBankings',
            name:'NetBanking',
            className: "side_nav_item"
        },
        {
            id:4,
            path:'/payments/CashOnDeliverys',
            name:'Cash on Delivery',
            className: "side_nav_item"
        },
        {
            id:5,
            path:'/payments/OtherPayments',
            name:'Other Payment',
            className: "side_nav_item"
        }
    ]);
    
    const handleClick = id => {
        setActiveLink(id);
      };
    return (
            <div className={styles.paymentSide}>
                    <ul className={styles.paymentNav}>
                        {
                            links.map((link,ind) => {
                                return <li key={ind}  className={
                                    link.className +
                                    (link.id === activeLink  ? ` ${styles.active_item}` : "")
                                  } onClick={() => handleClick(link.id)}>
                                            <div 
                                            className={styles.textContent} 
                                            // onClick={() => router.push(link.path)}
                                            >
                                                <Link className={styles.active} href={link.path}>
                                                    {link.name}
                                                </Link>
                                            </div>
                                        </li>;
                            })
                        }
                    </ul>
            </div>
        )
}
