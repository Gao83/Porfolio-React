import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import PortfolioV2 from './components/PortfolioV2/PortfolioV2'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {

    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <PortfolioV2 />
            <Contact />
            <Footer />
        </>
    )
}

export default App