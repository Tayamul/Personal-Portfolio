import React from 'react';
import Header from './components/header/Header'
import Nav from "./components/nav/Nav";
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Education from './components/education/Education';
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
        <Header/>  
        <Nav/>
        <About/>
        <Experience/>
        <Education/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App;