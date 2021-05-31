import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel'
import './Cases.scss'
import caseItem from './Cases.json'
import Homeheader from '../../../../widgets/Homeheader/Homeheader'
import Button from '../../../../widgets/Button/Button'
import {Link} from 'react-router-dom'
//import arrow_l from './images/jiantou-l@1x.png'
//import arrow_r from './images/jiantou-r@1x.png'

let header_text = "C站HR 应用成功案例"
const breakPoints = [{itemsToShow: 2, itemsToScroll: 1}]

const Case = () => {  
    const [itemList] = useState([...caseItem])

    return (
        <section className="case-wrapper">
            <Homeheader text={header_text} />
            <section className="case-box-wrapper">
                {/* <aside className="arrow-box arrow-left">
                    <div className="arrow left">
                        <button><a><img src={arrow_l} /></a></button>
                    </div>
                </aside> */}
                <article className="slide-container">
                    <Carousel breakPoints={breakPoints}>
                        {itemList.map((item) => {
                            const img = require(`${item.pic}`)
                            return (
                                <section className="case-carousel-box">
                                    <article className="case-carousel-article">
                                        <section className="case-article-box">
                                           <header className="case-carousel-header">
                                               {item.title.split('\n').map((case_title)=>
                                                  <h2>{case_title}</h2>
                                               )}
                                           </header>
                                           <article className="case-carousel-article"><h5>{item.detail}</h5></article>
                                           <div className="case-carousel-img">
                                              <i ><img src={img.default} /></i> 
                                           </div>
                                        </section>
                                        
                                             
                                        <div className="case-carousel-btn">
                                            <Link to={item.url}>
                                              <Button 
                                                text="客户故事" 
                                                btnClass="case-btn" 
                                                btnID="case-btn" 
                                              />
                                            </Link>
                                        </div>                         
                                    </article>
                                </section>
                            )
                        })}
                    </Carousel>
                    
                </article>
                {/* <aside className="arrow-box arrow-right">
                    <div className="arrow right">
                        <button><a><img src={arrow_r} /></a></button>
                    </div>
                </aside> */}
            </section>
            <div className="case-btn-box">
               <Link to='/consult'>
                 <Button text="了解更多" btnClass="more-btn" btnID="more-btn" />
               </Link>
            </div>
        </section>
    )
}

export default Case