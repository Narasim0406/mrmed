import React from 'react';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Invite from '../../components/Account/Invite/index';
import Account from '../../components/Account/index';
import Sidebar from '../../components/Account/SideBar';

function Invites() {
    return (
        <div>
            <Header/>
            <div className="container">
                <Account/>  
                <div className="d-flex">
                    <Sidebar/>
                    <Invite/>
                </div>              
            </div>
            <Footer/>
        </div>
    )
}

export default Invites;
