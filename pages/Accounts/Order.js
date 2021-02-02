import React from 'react'
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import MyOrder from '../../components/Account/Order/index';
import Account from '../../components/Account/index';
import Sidebar from '../../components/Account/SideBar';

function Order() {
    return (
        <div>
            <Header/>
            <div className="container">
                <Account/>  
                <div className="d-flex">
                    <Sidebar/>
                    <MyOrder/>
                </div>              
            </div>
            <Footer/>
        </div>
    )
}

export default Order
