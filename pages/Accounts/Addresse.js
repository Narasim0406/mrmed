import React from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Address from '../../components/Account/Address/index';
import Account from '../../components/Account/index';


function Addresse() {
    return (
        <div>
            <Header/>
            <div className="container">
                <Account/>
                <Address/>
            </div>
            <Footer/>
        </div>
    )
}

export default Addresse;
