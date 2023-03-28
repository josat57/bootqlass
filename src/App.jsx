import React from 'react'
import Header from './components/header/Header';
import Membership from './components/membership/Membership';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <main className='main-class'>
        <Header />
        <Membership />
        <About />
        <Contact />
        <Footer />
    </main>
  )
}

export default App;
