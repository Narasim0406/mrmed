import {useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { startClock } from '../actions';
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import LandingPage from '../../components/LandingPage/index';

const home = () => {
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(startClock())
  // }, [dispatch])

  return (
    <>
      <Header/>
       <LandingPage/>
      <Footer/>
    </>
  )
}

export default home
