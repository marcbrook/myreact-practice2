import React from 'react'
import './Homeheader.scss'

const Homeheader = ({text}) => {
    return (
        <section className="content-header">
            <div><h1>{text}</h1></div>
            <div className="header-line"></div>
        </section>
    )
}

export default Homeheader