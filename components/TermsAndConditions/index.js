import React from 'react'

function TermsAndPrivacy() {
    return (
        <div className="container">
            <div className="col-md-3">
                <div className={styles.accountDetails}>
                    <ul>
                        <div key={index}>
                            <Link href={to}>
                                <li className={`${styles.accountList} ${router.pathname === to ? styles.accountActiveList:''}`}>
                                    <p>Terms & condition</p>
                                </li>
                            </Link>
                            <Link href={to}>
                                <li className={`${styles.accountList} ${router.pathname === to ? styles.accountActiveList:''}`}>
                                    <p>privacy</p>
                                </li>
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TermsAndPrivacy;
