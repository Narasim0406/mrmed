import React, { Component } from 'react'

import styles from  '../Statitics/Statitics.module.scss'

class Statitics extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="row mb-5">
                <div className="col-md-4">
                    <div className={styles.statiticsBox}>
                        <div className="row">
                            <div className="col-4">
                                <img className={styles.statiticsImg} src={'/visitor.png'} />
                            </div>
                            <div className="col-8">
                                <b className={styles.statiticsCount}>5500+</b>
                                <br></br>
                                <span className={styles.visitor}>Visitors</span>                                  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.statiticsBox}>
                        <div className="row">
                            <div className="col-4">
                                <img className={styles.statiticsImg} src={'/truck.png'} />
                            </div>
                            <div className="col-8">
                                <b className={styles.statiticsCount}>6200+</b>
                                <br></br>
                                <span className={styles.visitor}>Orders</span>                                  
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.statiticsBox}>
                        <div className="row">
                            <div className="col-4">
                                <img className={styles.statiticsImg} src={'/buildings.png'} />
                            </div>
                            <div className="col-8">
                                <b className={styles.statiticsCount}>14+</b>
                                <br></br>
                                <span className={styles.visitor}>Cities</span>                                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Statitics;