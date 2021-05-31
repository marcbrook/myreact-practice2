import React from 'react'
import './Solution.scss'
import itemList from './Solution.json'
import Homeheader from '../../../../widgets/Homeheader/Homeheader'
import { Link } from 'react-router-dom'
import Button from '../../../../widgets/Button/Button'
import dotImg from './images/black-circle.png'
import Social from '../../../../widgets/Social/Social'

let header_text = "自主创新的数字化解决方案"

const Solution = () => {
    return (
        <section className="solution-wrapper">
            <Homeheader text={header_text} />
            <section className="solution-box-wrapper">
                {itemList.map((List) => {
                    const img = require(`${List.pics}`)
                    return (
                        <section className ="sol-content-wrapper">
                            <div>
                                <i><img src = {img.default} alt={List.alts}></img></i>
                            </div>
                            <article className="sol-content-box">
                                <div><h2>{List.title}</h2></div>
                                <section className="sol-content-detail">
                                    <div><p>{List.detail}</p></div>
                                    <div className="content-topics">
                                        {List.topics.map((topic) => {
                                            return (
                                                <h5><img src={dotImg} /><Link to="/consult">{topic}</Link></h5>
                                            )
                                        })}
                                    </div>
                                </section>
                            </article>
                            <div className="sol-content-btn">
                                <Button text="详情" btnClass="sol-btn" btnID="sol-btn" />
                            </div>
                        </section>
                    )
                })}
            </section>
            <div className="sol-btn-box">
               <Link to='/user-form'>
                 <Button text="预约演示" btnClass="order-btn" btnID="order-btn" />
               </Link>
            </div>
            <aside className="contact-box">
               <Social />
            </aside>
        </section>
    )
}

export default Solution