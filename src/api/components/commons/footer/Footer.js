import React from 'react'
import './Footer.scss'
import Linklist from './FooterLink.json'
import {Link} from 'react-router-dom'

const Footer = () =>{
    return (
        <footer className="footer-wrapper">
            <section className="footer-link-wrapper">
                <main className="footer-link-box">
                    {Linklist.map((Linkitem)=>{
                        return (
                            <div className="linklist-box">
                                <section className="linklist-box-wrapper">
                                    <div className="link-title">
                                        <h1>{Linkitem.title}</h1>
                                    </div>
                                    {Linkitem.linklist.map((Linkname)=>{
                                        return (
                                            <div className="link-name">
                                                <h5>
                                                    <Link to={Linkname.link}>{Linkname.name}</Link>
                                                </h5>
                                            </div>   
                                        )
                                    })}
                                </section>
                            </div>
                        )
                    })}
                </main>
            </section>
            <div className="footer-box">
                <main className="footer-copyright">
                  <p>©2028 CSDN. All Rights Reserved.</p>
                </main>
            </div>
        </footer>
    )
}

export default Footer

