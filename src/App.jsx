import React from 'react'
import { Cart, FlexContent, Footer, Hero, Navbar, Sales, Stories } from './components'
import { heroapi, popularsales, toprateslaes, highlight, sneaker, story, footerAPI } from './data/data.js'

const App = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <main className=' flex flex-col gap-16 relative'>
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists/>
        <FlexContent endpoint={highlight} ifExists/>
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories story={story} />
        <Footer footerAPI={footerAPI}/>
      </main>
    </div>
  )
}

export default App

// 2h24mn

