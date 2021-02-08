import React,{useState,useEffect} from 'react'
import SignIn from '../Login/Signin/index';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Popover, PopoverBody } from 'reactstrap';
import { useDispatch } from 'react-redux'
// const whatsapp = require('../../assets/images/whatsapp-fab.png');
import {useRouter} from "next/router";
import { useSelector} from 'react-redux'
import styles from './Header.module.scss';
import { userDetails, userToken } from '../../actions';

function Header(){
   const dispatch = useDispatch();
   const userDetail = useSelector((state) => state.auth);
   const cartProducts = useSelector(state => state.cartDetail)
   let [userData, setuserData] = useState({});
   const [cartLength,setCartLength] = useState(0);
   let [langDropDown, setLangDropDown] = useState(false);
   let [locationPopOver, setLocationPopOver] = useState(false);
   let [userDropDown, setUserDropDown] = useState(false);
   const products = useSelector(state => state.productList)
   const [modal,setModal] = useState(false);
   const router = useRouter();

    const userDropDowne = () => {
        setUserDropDown(!userDropDown);
    }
    const langDropDowns = () => {
        setLangDropDown(!langDropDown);
    }
    const locationPopOvers = () => {
        setLocationPopOver(!locationPopOver);
    }
    useEffect(() => {
        if(localStorage.userData){
            dispatch(userDetails(JSON.parse(localStorage.userData)));

            setuserData(JSON.parse(localStorage.userData))
        }
        let len = cartProducts.cartProduct ? cartProducts.cartProduct.length : 0
        setCartLength(len);
        console.log(cartProducts.cartProduct, "dsfsfdfgsdhgfdghj", cartLength, cartProducts.cartProduct.length);
        // if(userDetail.token){
        //     toggle();
        // }
    }, [cartProducts])

    const logout = () => {
        localStorage.clear()
        window.location.reload();
    }

    const toggle = async() => {
        setModal(!modal);
        if(localStorage.userData){
            await dispatch(userDetails(JSON.parse(localStorage.userData)));

            setuserData(JSON.parse(localStorage.userData))
        }
    }

    return(
            <div className={styles.headers}>
                <div className={styles.greyBack}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10">
                                <img src={'/whatsapp-fab.png'}/>
                                <b>+91-941183088</b>
                                <img src={'/phone.png'} style={{objectFit:'contain'}}/>
                                <b>+91-941183088</b>
                            </div>
                            <div className="col-md-2">
                                <Dropdown className={styles.lang} isOpen={langDropDown} toggle={langDropDowns}>
                                    <DropdownToggle caret tag="span" data-toggle="dropdown" aria-expanded={langDropDown}>
                                        <span>EN</span>
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Language</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.logo}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9 d-flex">
                                {/* <NavLink id="nav-link" to="/dashboard/landingPage"> */}
                                    <img onClick={() => router.push('/')} className={styles.imgLogo} src={'/logo.png'} style={{cursor:'pointer'}}/>
                                {/* </NavLink> */}
                                <div className={styles.deliveryContent}>
                                    <img src='/loc.png'/>
                                    <div className={styles.deliveryContainer}>
                                        <label>Deliver to</label>
                                        <div className={styles.deliver}>
                                            <input id="pin" className={styles.deliver} type="text" placeholder="pincode"/>
                                            <label htmlFor="pin"><img src='/edit.png'/></label>
                                        </div>
                                    </div>
                                </div>
                                {/* <Popover style={{'width':'175px'}} placement="auto-start" isOpen={locationPopOver} target="Popover1" toggle={locationPopOvers}>
                                    <PopoverBody>
                                        <div className={styles.locationDropdown}>
                                            <div className="row bottom">
                                                <div className="col-md-6">
                                                    {/* <img src={require('../../assets/images/liver.png')} /> 
                                                    <span>Bangalore</span>
                                                </div>
                                                <div className="col-md-6">
                                                     <img src={require('../../assets/images/liver.png')} /> 
                                                    <span>Mumbai</span>
                                                </div>
                                            </div>
                                            <div className="row bottom">
                                                <div className="col-md-6">
                                                    {/* <img src={require('../../assets/images/liver.png')} /> 
                                                    <span>Pune</span>
                                                </div>
                                                <div className="col-md-6">
                                                    {/* <img src={require('../../assets/images/liver.png')} /> 
                                                    <span>Delhi</span>
                                                </div>
                                            </div>
                                            <div className="row bottom">
                                                <div className="col-md-6">
                                                    {/* <img src={require('../../assets/images/liver.png')} /> 
                                                    <span>Noida</span>
                                                </div>
                                                <div className="col-md-6">
                                                    {/* <img src={require('../../assets/images/liver.png')} /> 
                                                    <span>Gurgaon</span>
                                                </div>
                                            </div>
                                            <div className="row bottom">
                                                <div className="col-md-6">
                                                    {/* <img src={require('../../assets/images/liver.png')} /> 
                                                    <span>Hyderabad</span>
                                                </div>
                                                <div className="col-md-6">
                                                    {/* <img src={require('../../assets/images/liver.png')} /> 
                                                    <span>Chennai</span>
                                                </div>
                                            </div>
                                        </div>
                                    </PopoverBody>
                                </Popover> */}
                                <input type="text" placeholder="Search for medicines and health products" className="search-box" />
                                <img className={styles.searchIcon} src={'/search.png'} />
                            </div>
                            <div className="col-md-3">
                                <div className={styles.headerIcon}>
                                    <div className="btn-group">
                                    <Dropdown isOpen={userDropDown} toggle={userDropDowne}>
                                        {/* <Dropdown isOpen={this.state.userDropDown} toggle={()=>this.userDropDown()}> */}
                                            <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={userDropDown}>
                                                <span className={styles.iconAlign} onClick={userData && userData.token && userData.name ? userDropDowne:toggle}>{userData && userData.token && userData.name ? userData.name : 'Login/Sign Up'}</span>
                                                <img className={styles.iconAlign} src={'/user.svg'} style={{cursor:'pointer'}}/>
                                            </DropdownToggle>
                                            <DropdownMenu className={styles.dropdownMenu} >
                                                <DropdownItem className={styles.item} onClick={() => router.push('/Accounts/Profiles')}>
                                                    {/* <NavLink id="nav-link" to="/account/profile"> */}
                                                        <img className={styles.dropdownIcon} src={'/user.svg'}/>
                                                        <span>My Profile</span>
                                                    {/* </NavLink>  */}
                                                </DropdownItem>
                                                <DropdownItem className={styles.item} onClick={() => router.push('/Accounts/Order')}>
                                                    {/* <NavLink id="nav-link" to="/account/order">  */}
                                                        <img className={styles.dropdownIcon} src={'/delivery.svg'}/>
                                                        <span>My Orders</span>
                                                    {/* </NavLink> */}
                                                </DropdownItem>
                                                <DropdownItem className={styles.item} onClick={() => router.push('/Accounts/MyPrescription')}>
                                                    {/* <NavLink id="nav-link" to="/account/prescription"> */}
                                                        <img className={styles.dropdownIcon} src={'/prescription.svg'}/>
                                                        <span>My Prescription</span>
                                                    {/* </NavLink>  */}
                                                </DropdownItem>
                                                {/* <DropdownItem>
                                                     <NavLink id="nav-link" to="/account/wishlist">  
                                                        <img className={styles.dropdownIcon} src={require('../../assets/images/wishlist.svg')}/>
                                                        <span>Wishlist</span>
                                                     </NavLink> 
                                                </DropdownItem> */}
                                                <DropdownItem className={styles.item} onClick={() => router.push('/Accounts/Payments')}>
                                                    {/* <NavLink id="nav-link" to="/account/payment">  */}
                                                        <img className={styles.dropdownIcon} src={'/credit-card.svg'}/>
                                                        <span>Payments</span>
                                                    {/* </NavLink> */}
                                                </DropdownItem>
                                                {/* <DropdownItem className={styles.item} onClick={() => router.push('/Accounts/logout')}> */}
                                                <DropdownItem className={styles.item} onClick={logout}>
                                                    <img className={styles.dropdownIcon} src={'/exit.svg'}/>
                                                    <span>Logout</span>
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                    <img className={styles.iconAlign} src={'/line.png'}/>
                                    {/* <NavLink id="nav-link" to="/dashboard/cartPage"> */}
                                        <span onClick={() => router.push('/Cart')} className={styles.iconAlign}>Cart</span>
                                        <img onClick={() => router.push('/Cart')} src={'/shopping-cart.png'} style={{cursor:'pointer'}}/>
                                        <button onClick={() => router.push('/Cart')} className={styles.cartBadge} id="cart-count">{cartLength}</button>
                                    {/* </NavLink> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.greenBack}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ul>
                                    <li onClick={()=> router.push('/SpecialityMed')}>
                                        <img className={styles.listImg} src={'/wings.png'}/>
                                        <b> SPECIALITY MEDICINES</b>
                                    </li>
                                    {/* <Link id="nav-link" href="/pages/PapAssistance"> */}
                                        <li onClick={() => router.push('/PapAssistance')}>
                                            <img className={styles.listImg} src={'/patient.png'}/>
                                            <b> PATIENT ASSISTANCE PROGRAMME</b>
                                        </li>
                                    {/* </Link> */}
                                    {/* <NavLink id="nav-link" to="/dashboard/importedMedicine"> */} 
                                        <li onClick={() => router.push('/ImportedMedicineComponet')}>
                                            <img className={styles.listImg} src={'/tablet.png'}/>
                                            <b> IMPORTED MEDICINE</b>
                                        </li>
                                    {/* </NavLink> */}
                                    <li>
                                        <img className={styles.listImg} src={'/heart-rate.png'}/>
                                        <b> WELLNESS</b>
                                    </li>
                                    {/* <NavLink to="/dashboard/stepperSuccess"> */}
                                        <div onClick={() => router.push('/UploadStepper')} className={styles.uploadPrescription}>
                                            <button className={styles.btnUpload}><b>UPLOAD PRESCRIPTION</b></button>
                                        </div>
                                    {/* </NavLink> */}
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
                <SignIn modal={modal} toggle={toggle}/>
            </div>
        );
}

export default Header;