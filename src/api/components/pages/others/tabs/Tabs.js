import React, {useState} from 'react'
import {Tabs, Tab, Content} from './tab'
import './Tabs.scss'
import tablist from './tabs.json'


const Tabswitch =()=> {
    const [active, setActive] = useState(0);
    const handleClick = e =>{
        const index = parseInt (e.target.id, 0)
        if(index !== active) {
            setActive(index) 
        }
    }

    return (
        <section className="tab-container">
            <Tabs>
                <Tab onClick={handleClick} active={active === 0} id={0}>AAAAA</Tab>
                <Tab onClick={handleClick} active={active === 1} id={1}>BBBBB</Tab>
            </Tabs>
            
            <section className="tab-content">
                {tablist.map((list)=>{
                    return (
                        <Content active={active === list.id}>
                            
                        <div className="tab-content-box">
                            {list.content.map((ele)=>{
                                return (<p>{ele}</p>)
                            })}
                        </div>
                        </Content>
                    )                    
                })}
            </section>
            {/* <section className="tab-content">
                <Content active={active === 0}>
                    <div className="tab-content-box">
                        <p>ddsdsfasdf</p>
                    </div>
                </Content>
                <Content active={active === 1}>
                    <div className="tab-content-box">
                        <p>sdfaasfasfasfsafsa</p>
                    </div>
                </Content>
            </section> */}
            {/* <div class="hline">
				<section class="header-nav-bar-line"></section> 
			</div> */}
        </section>
    )
}

export default Tabswitch


// export const Tabs = styled.div`
//   overflow: hidden;

//   background: #fff;
//   font-family: Open Sans;
//   height: 3em;
// `;

// margin-right: 0.1em;
// font-size: 1em;
// border: ${props => (props.active ? "5px solid #ccc" : "2px solid #f3f")};
// border-bottom: ${props => (props.active ? "none" : "")};
// background-color: ${props => (props.active ? "white" : "yellow")};
// height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
// transition: background-color 5s ease-in-out;
