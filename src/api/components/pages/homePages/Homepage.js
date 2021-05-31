import React from 'react'
import './Homepage.scss'
import Banner from './components/companyBanner/Banner'
import Solution from './components/companySolutions/Solution'
import Cases from './components/companyCases/Cases'
import News from './components/companyNews/News'

const Home = () => {
  return (
    <section className="home-wrapper">
       <Banner />
       <Solution />
       <Cases />
       <News />
    </section> 
  )
}

export default Home

