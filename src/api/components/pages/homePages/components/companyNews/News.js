import React from 'react'
import './News.scss'
import ItemList from './News.json'
import Homeheader from '../../../../widgets/Homeheader/Homeheader'
import Button from '../../../../widgets/Button/Button'
import {Link} from 'react-router-dom'
import btnimg from './images/quan@1x.png'

let header_text = "新闻资讯"

const News = () => {
    return (
        <section className="news-wrapper">
            <Homeheader text={header_text} />
            <section className="news-wrapper-box">
                {ItemList.map((news_list) => {
                    return (
                        <article className="news-box">
                            <div className="news-topics-box">
                                <div><h1>{news_list.topic}</h1></div>
                                <div>
                                  <Link to="/product">
                                    <Button text="更多" 
                                    btnClass="news-more-btn"
                                    image = {btnimg}
                                    />
                                  </Link> 
                                </div> 
                            </div>
                            <div className="news-titles-box">
                                {news_list.news.map((news_detail) => {
                                    return (
                                        <section className="news-title">
                                            <div className="news-name"><Link to={news_detail.url}><h5>{news_detail.title}</h5></Link></div>
                                            <div className="news-date"><p>{news_detail.date}</p></div>
                                        </section>
                                    )
                                })}
                            </div>
                        </article>
                    )
                })}
            </section>
        </section>
    )
}

export default News