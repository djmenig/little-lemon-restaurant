import React from "react";
import svg1 from "../assets/Logo.svg";

const Footer = () => {
    return (
    <React.Fragment>
        <h1>Everything below this is the last section called the Footer</h1>
        <img src={svg1} alt="logo" />
        <nav>
            <h2>Navigation</h2>
            <ul>
                <li class="navmenulink"><a href="../App.js">home</a></li>
                <li class="navmenulink"><a href="../App.js/#about">about</a></li>
                <li class="navmenulink"><a href="../components/menu.js">menu</a></li>
                <li class="navmenulink"><a href="../components/reservations.js">reservations</a></li>
                <li class="navmenulink"><a href="../components/orderonline.js">order online</a></li>
                <li class="navmenulink"><a href="../components/login.js">login</a></li>
            </ul>
        </nav>
        <nav>
            <h3>Contact</h3>
            <ul>
                <li class="navmenulink"><a href="../App.js">home</a></li>
                <li class="navmenulink"><a href="../App.js/#about">about</a></li>
                <li class="navmenulink"><a href="../components/menu.js">menu</a></li>
            </ul>
        </nav>
        <nav>
            <h3>Social</h3>
            <ul>
                <li class="navmenulink"><a href="../App.js">home</a></li>
                <li class="navmenulink"><a href="../App.js/#about">about</a></li>
                <li class="navmenulink"><a href="../components/menu.js">menu</a></li>
            </ul>
        </nav>
    </React.Fragment>
    );
    }

export default Footer