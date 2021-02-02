import React from 'react'
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Payment from '../../components/Account/Payment/index';
import Account from '../../components/Account/index';
import Sidebar from '../../components/Account/SideBar';

function Payments() {
    return (
        <div>
            <Header/>
            <div className="container">
                <Account/>  
                <div className="d-flex">
                    <Sidebar/>
                    <Payment/>
                </div>              
            </div>
            <Footer/>
        </div>
    )
}

export default Payments;
