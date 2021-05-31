import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.scss'

const Nav = () => {
    return (
        <div className="nav-bar-box">
            <main className="nav-bar-box-wrapper">
                <nav className="nav-bar-item">
                    <ul>
                        <li><Link to="/home">首页</Link></li>
			   	        <li><Link to="/solution">解决方案</Link></li>
			   	        <li><Link to="/product">产品与服务</Link></li>
			   	        <li><Link to="/customer">客户案例</Link></li>
			   	        <li><Link to="/consult">咨询中心</Link></li>
			   	        <li><Link to="/about/:name">关于我们</Link></li>
                    </ul>
                </nav>
            </main>
        </div>
    )
}

export default Nav