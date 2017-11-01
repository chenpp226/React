import React, { Component } from 'react'
import { getComingSoonData } from '../../service/homeservice.js'
import BScroll from 'better-scroll'

export default class ComingSoon extends Component{
    constructor(){
        super();
        this.state = {
            comingSoonList : []
        }
    }
    render(){
        return(
            <div class="comingsoon" ref="comingsoon">
                <ul class="comingsoonList">
                    {
                        this.state.comingSoonList.map((item,index)=>{
                            let date = new Date(item.premiereAt).toLocaleString().replace(/:\d{1,2}$/,' ');
                            //console.log(date)
                            return(
                                <li key={index}  onClick={this.gotoFilmDetailPage.bind(this,item.id)}>
                                    <div  class="one-bottom-px info-wrapper">
                                        <div class="tumbImg">
                                            <img src={item.poster.thumbnail} alt=""/>
                                        </div>
                                        <div class="comingsoonItemInfo">
                                            <h3>{item.name}</h3>
                                            <p>{item.intro}</p>
                                            <p>上映时间 : {date}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
    gotoFilmDetailPage(id){
        this.props.history.push("/flimdetail:"+id)
        //console.log(this)
    }
    componentWillMount(){
        getComingSoonData().then((result)=>{
            this.setState({comingSoonList : result})
        })
    }
    componentDidMount(){
        this.comingsoonScroller = new BScroll(this.refs.comingsoon,{
            click : true
        })
        this.comingsoonScroller.on("scrollStart",()=>{
            this.comingsoonScroller.refresh();
        }) 
    }
}