import React from 'react'
import './Search.scss'

const Search = () => {
    return (
        <section className="search-box">
            <form>
                <input type="search" placeholder="请输入关键字"/>
            </form>
        </section>
    )
}

export default Search