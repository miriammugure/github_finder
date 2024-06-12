import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
function Header() {
  return (
    <div>
      <div className="HeaderContainer">
        <div className="logoName">
            <h1>github finder</h1>
        </div>
        
        <div className="logoLink">
            <p>by <a href="https://github.com/miriammugure">miriam mugure</a> </p>
        </div>
        <div className="searchContainer">
            <form action="">
                <div className="inputBox">
                    <input type="text" 
                    placeholder='enter a username'
                    />
                    <button>search</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Header
