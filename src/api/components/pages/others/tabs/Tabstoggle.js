import React, { useState } from 'react'
import tabsItem from './tabs.json'
import './Tabstoggle.scss'

const Tabstoggle =() => {
    const [toggle, setToggle] = useState(0);

    const toggleTab = (index) => {
        setToggle(index)
    }
    return (
        <section className="container">
            <div className="bloc-tabs">
                <button
                className={toggle === 0 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(0)}
                >Tab 1</button>
                <button
                className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
                >Tab 2</button>
            </div>
            <div className="content-tabs">
                {tabsItem.map((item)=>{
                    return (
                        <div
                          className={toggle === item.id ? "content active-content" : "content"}
                        >
                           {item.content.map((tabContent)=>{
                               return (<div>{tabContent}</div>)
                           })}
                        </div>
                    )  
                })}
            </div>
        </section>
    )
}

export default Tabstoggle