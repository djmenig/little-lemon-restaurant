import React from "react";

const Header = () => {
    return (
    <React.Fragment>
        <img src="../assets/restauranfood.jpg"></img>
        <nav>
            <h3>Navigation</h3>
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