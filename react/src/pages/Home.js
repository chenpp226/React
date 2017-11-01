import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom'
import store from '../../store'
import NowPlaying from '../components/home/NowPlaying.js'
import ComingSoon from '../components/home/ComingSoon.js'
import Activities from '../components/home/Activities.js'
import Location from './Location.js'


export default class Home extends Component{
    constructor({history}){
        super();
        this.history = history;
        //console.log(this.history)
        this.state = {
            navInfo:["正在热映","即将上映","热门活动"],
            showItem:store.getState().showItem,
            activeClass:""
        }
    }
                     
     render(){
           
        let nowplaying = this.state.showItem==="正在热映" ? <NowPlaying history={this.history}/> : "";
        let comingsoon = this.state.showItem==="即将上映" ? <ComingSoon history={this.history}/> : "";
        let activities = this.state.showItem==="热门活动" ? <Activities /> : "";
        
         return(
             <div id="home" class="page">
                 <div class="home-header one-bottom-px">
                     <img src="/dist/images/logo.jpg" alt=""/>
                     <span onClick={this.selectCity.bind(this)}>
                         选择城市
                         <i class="iconfont">&#xe6a9;</i>
                     </span>
                 </div>
                 <div class="home-content">
                    <div class="home-nav">
                        {
                            this.state.navInfo.map((item,index)=>{
                                return(
                                    <span key={index} onClick={this.selectNav.bind(this,item)}>
                                        <i class={this.state.showItem===item?"active":""}>{item}</i>
                                    </span>
                                )
                            })
                        } 
                    </div>
                    {nowplaying}
                    {comingsoon}
                    {activities}
                        
                    
                 </div>
                 <Route path="/home/location" component={Location}/>
             </div>
         )
     }
    selectNav(i){
        this.setState({showItem:i},()=>{
            //console.log(this.state.showItem);
            store.dispatch({
                type:"selectNav",
                value:{
                    showItem:this.state.showItem
                }
            })
        });
    }
    selectCity(){
        this.history.push('/home/location');
    }
    
 }