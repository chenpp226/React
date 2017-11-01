import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom'

import Home from './pages/Home.js'
import Cinema from './pages/Cinema.js'
import MaiCard from './pages/MaiCard.js'
import Mall from './pages/Mall.js'
import Mine from './pages/Mine.js'
import FilmDetail from './pages/FilmDetail.js'
import GoodsDetail from './pages/GoodsDetail.js'

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            footerNav:[
                {"title":"电影","icon":"\ue675","path":"/home"},
                {"title":"影院","icon":"\ue655","path":"/cinema"},
                {"title":"卖座卡","icon":"\ue60a","path":"/maicard"},
                {"title":"商城","icon":"\ue706","path":"/mall"},
                {"title":"我的","icon":"\ue640","path":"/mine"}
            ]
        }
    }
     render(){
         return(
            <Router>
                <div id="root">
                    <Switch>
                        {/* 路径'/'的重定向 */}
                        <Route path="/" exact render={()=>{
                            return <Redirect to="/home"/>
                        }}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/cinema" component={Cinema}/>
                        <Route path="/maicard" component={MaiCard}/>
                        <Route path="/mall" component={Mall}/>
                        <Route path="/mine" component={Mine}/>
                        <Route path="/flimdetail:id" component={FilmDetail}/>
                        <Route path="/goodsdetail:id" component={GoodsDetail}/>
                        {/* 路径'*'的匹配 */}
                        <Route component={Home}/>
                    </Switch>
                    <div class="footer one-top-px">
                        {
                            this.state.footerNav.map((item,index)=>{
                                return(
                                    <NavLink key={index} to={item.path}>
                                        <span class="iconfont">{item.icon}</span>
                                        <span>{item.title}</span>
                                        <span></span> 
                                    </NavLink> 
                                )                     
                            })
                        }
                    </div>
                </div>
            </Router>
         )
     }
 }