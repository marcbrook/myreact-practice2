import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Button/Button'

const MessageBox = styled.section`
  //position: absolute;
  margin: auto;
  width: 70px;
  .message-box-btn{
      background: #78CBF7;
      border-color: #78CBF7;
      display: flex;
      flex-direction: column;
      margin-bottom: 2px;
      padding: 9px 7px 9px 7px;
      cursor:pointer;

      font-family: PingFangSC-Regular;
      font-size: 13px;
      color: #FFFFFF;
      &:hover{
        background: blue;  
        border-color: blue;
      }
  }
`

const Messasge = [
    {
        title: "在线咨询",
        pic: "./images/showIcon@1x.png",
        url: "/consult"
    },
    {
        title: "电话咨询",
        pic: "./images/telIcon@1x.png",
        url: "/consult"
    },
    {
        title: "预约演示",
        pic: "./images/zixunIcon@1x.png",
        url: "/user-form"
    }
]

const Social =()=>{
    return(
        <MessageBox>
            <aside className="message-box-wrapper">
                {Messasge.map((item)=>{
                    //const img = require(`${item.pic}`)
                    return(
                        <div>
                            <Link to={item.url}>
                                <Button text={item.title}
                                btnClass="message-box-btn"
                                image={require(`${item.pic}`).default}
                                />
                            </Link>
                        </div>
                    )
                })}
            </aside>
        </MessageBox>
    )
}

export default Social 