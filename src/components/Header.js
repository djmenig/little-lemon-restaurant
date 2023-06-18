import React from "react";
import Logo from "../assets/Logo.svg";

const Header = () => {
    return (
    <React.Fragment>
        <img src="../assets/Logo.svg"></img>
        <nav>
            <ul>
                <li class="navmenulink"><a href="../App.js">home</a></li>
                <li class="navmenulink"><a href="../App.js/#about">about</a></li>
                <li class="navmenulink"><a href="../components/menu.js">menu</a></li>
                <li class="navmenulink"><a href="../components/reservations.js">reservations</a></li>
                <li class="navmenulink"><a href="../components/orderonline.js">order online</a></li>
                <li class="navmenulink"><a href="../components/login.js">login</a></li>
            </ul>
        </nav>
    </React.Fragment>
    );
    }
