import React from 'react'
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom"
import Shops from '../../pages/Shops'
import Articles from '../../pages/Articles'
import Home from '../../pages/Home'
import LoginNavigation from './LoginNavigation'
import LoginForm from './LoginForm'
import PostArticle from '../PostArticle'

// CSS
import './Header.css'


const HeaderMenu = () => {
    return (
        <Router>
            <div className="navigation_menu">
                <ul>
                    <li>
                        <Link to="/"><span>FRESH SHOP</span></Link>
                    </li>
                    <li>
                        <Link to="/all_articles">Toutes les annonces</Link>
                    </li>
                    <li>
                        <Link to="/all_shops">Boutiques</Link>
                    </li>
                </ul>
                <LoginNavigation/>
            </div>
            <Switch>
                    <Route path="/post_article">
                        <PostArticle/>
                    </Route>
                    <Route path="/login">
                        <LoginForm/>
                    </Route>
                    <Route path="/all_articles">
                        <Articles/>
                    </Route>
                    <Route path="/all_shops">
                        <Shops/>
                    </Route>
                    <Route path="/">
                        <Home/> 
                    </Route>
            </Switch> 
        </Router>
    )
}


export default HeaderMenu;