import React from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import ChangeNumber from '../../components/Account/ChangeNumber/index';
import Account from '../../components/Account/index';
import Sidebar from '../../components/Account/SideBar';

function ChangeNumbers() {
    return (
        <div>
            <Header/>
            <div className="container">
                <Account/>
                <div className="d-flex">
                    <Sidebar/>
                    <ChangeNumber/>
                </div>            
            </div>
            <Footer/>
        </div>
    )
}

export default ChangeNumbers;
