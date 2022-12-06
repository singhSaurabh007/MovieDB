import React from "react"
import logo from './logo.png';
import "./Header.css"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faFacebook,
    faInstagram,
    faTwitter
  } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src={logo} /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>

            <div className="headerRight">
                <div class="social-container">
                    <a href="https://www.facebook.com/harrypotter098/" className="facebook social"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                    <a href="https://www.instagram.com/harrry007/" className="instagram social"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                    <a href="https://twitter.com/___saurabh_____" className="twitter social"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                </div>
            </div>
        </div>
    )
}

export default Header