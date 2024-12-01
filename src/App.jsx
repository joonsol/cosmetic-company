import './App.css'
import Header from './components/Header'
import Service from './components/Service'
import Home from './components/Home'
import Product from './components/Product'
import About from './components/About'
import Footer from './components/Footer'
import SubNav from './components/SubNav'
import { useState } from 'react'

function App() {
  const [headerState, setHeaderState]=useState(false)

  const toggleHeaderState=()=>{
    setHeaderState((prevState) => !prevState)
  }


  return (
    <div>
      <Header headerState={headerState} onClickSub={toggleHeaderState}/>
      <SubNav headerState={headerState}/>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="product">
        <Product />
      </section>

      <section id="service">
        <Service />
      </section>
      <Footer/>
    </div>
  )
}

export default App
