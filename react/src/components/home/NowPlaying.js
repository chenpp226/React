import React, { Component } from 'react'
import { getBannerData, getNowPlayingData } from '../../service/homeservice.js'
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch } from 'react-router-dom'
import BScroll from 'better-scroll'
// import FilmDetail from '../../pages/FilmDetail.js'

export default class NowPlaying extends Component{
    constructor(){
        super();
        this.state = {
            bannerData:[],
            nowplayingData:[]
        }
    }
    render(){
        return(
            <div class="nowplaying" ref="nowplaying">
                <div class="scroll-wrapper">
                    <div class="banner swiper-container" ref="banner">
                        <div class="swiper-wrapper">
                            {
                                this.state.bannerData.map((item,index)=>{
                                    return(
                                        <div key={index} class="swiper-slide">
                                            <img src={item.imageUrl} alt={item.name}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <ul class="infoList">
                        {
                            this.state.nowplayingData.map((item,index)=>{
                                return(
                                    <li key={index} class="one-bottom-px" onClick={this.gotoFilmDetailPage.bind(this,item.id)}>
                                        <div class="tumbImg">
                                            <img src={item.poster.thumbnail} alt={item.name}/>
                                        </div>
                                        <div class="listDetail">
                                            <div class="title">
                                                <h3>{item.name}</h3>
                                                <span>{item.grade}</span>
                                            </div>
                                            <p>{item.intro}</p>
                                            <p>{item.cinemaCount}家影院正在上映</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* <Route path="/flimDetail:id" component={FilmDetail}/> */}
            </div>
        )
    }
    gotoFilmDetailPage(id){
        this.props.history.push("/flimdetail:"+id)
        //console.log(this)
    }
    componentWillMount(){
        getBannerData().then((result)=>{
            this.setState({bannerData:result},()=>{
                //console.log(this.state.bannerData)
            })
        });
        getNowPlayingData().then((result)=>{
            this.setState({nowplayingData:result})
        })
    }
    componentDidMount(){
        this.swiper = new Swiper(this.refs.banner,{
            pagination : ".swiper-pagination",
            autoplay : 2000,
            loop : false
        })
        //this.swiper.update();
        this.scroller = new BScroll(this.refs.nowplaying,{
            click:true
        })
        this.scroller.on("scrollStart",()=>{
            this.scroller.refresh();
        })
    }
    componentDidUpdate(){
       this.swiper.update();
    }
}