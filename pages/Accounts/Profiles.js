import React from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Account from '../../components/Account/index';
import Profile from '../../components/Account/Profile/index';
import Sidebar from '../../components/Account/SideBar';

function Profiles() {
    return (
        <div>
            <Header/>
            <div className="container">
                <Account/>  
                <div className="d-flex">
                    <Sidebar/>
                    <Profile/>
                </div>              
            </div>
            <Footer/>
        </div>
    )
}

export default Profiles;
