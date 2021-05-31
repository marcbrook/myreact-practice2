import React from 'react'
import {Link} from 'react-router-dom'
import './Login.scss'

const Login = () => {
    return (      
        <div className="login-box">
           <span><Link to="/login">登录</Link></span> |  
           <span><Link to="/register"> 立即注册</Link></span>
        </div>
    )
}

export default Login