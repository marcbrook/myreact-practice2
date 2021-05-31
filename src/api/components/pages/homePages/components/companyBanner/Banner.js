import React from 'react'
import Button  from '../../../../widgets/Button/Button'
import {Link} from 'react-router-dom'
import './Banner.scss'

const bannerText = [
    '自主创新',
    '一站式人力资源科技与服务平台',
    '以人为核心，围绕整体业务流程，为企业提供数字化解决方案及增值服务，科技赋能, \n成就企业与员工价值，提升企业核心竞争力，伴随企业卓越成长！'
]

// let newText = text.split('\n').map(i => {
//     return <p>{i}</p>
// });

const Banner = () => {
    return (
        <section className="banner-wrapper">
            <article className="banner-content-box">
                {bannerText.map((text)=>{
                   return (
                     text.split('\n').map((newtext)=>
                     <div className="banner-content"><h5>{newtext}</h5></div>)
                   )
                })}
            </article>
            <div className="banner-btn-box">
               <Link to='/user-form'>
                 <Button text="预约演示" btnClass="order-btn" btnID="order-btn" />
               </Link>
            </div> 
        </section>   
    )
}

export default Banner