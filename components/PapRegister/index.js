import React from 'react'

import PapForm from '../PapRegister/PapRegisterForm/index';

import styles from './PapRegisterComponent.module.scss';

function PapRegisterComponent(){
        return (
            <div>
                <div className="container">
                    <div className={`col-md-12 ${styles.indication}`}>
                        <br/>
                        <span>Home &gt; Patient Assistance Programme &gt; Register</span>
                        <br/>
                        <b>PAP Register</b>
                        <hr/>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-11">
                            <PapForm></PapForm>
                        </div>
                    </div>
                </div>
            </div>
        );
}


export default PapRegisterComponent;