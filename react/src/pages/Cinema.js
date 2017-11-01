import React, { Component } from 'react'
import BScroll from 'better-scroll'
import { getCinemaData } from '../service/cinemaService.js'

export default class Cinema extends Component{
    constructor(){
        super();
        this.state = {
            cinemasData:[]
        }
    }
     render(){
         let cinemaHtml = []
         for(let key in this.state.cinemasData){
             let value = this.state.cinemasData[key]
             //console.log(value)
            let listHtml = value.cinemasList.map((item,index)=>{
                return(
                    <li key={index} class="one-bottom-px">
                        <div class="cinema-info-title">
                            <h3>{item.name}</h3>
                            <span>￥{item.minimumPrice} <i>起</i></span>
                        </div>
                        <div class="cinema-info-address">
                            {item.address}
                        </div>
                    </li>
                )
            })
            let divList = (
                <div class="cinema-info-wrapper" key={key}>
                    <h2 onClick={this.foldClick.bind(this,key)}>{value.districtName}</h2>
                    <ul>
                        {value.unFold ? listHtml : ""}
                    </ul>
                </div>
            )
            cinemaHtml.push(divList);
        }
         return(
             <div id="cinema" class="page">
                 <div class="cinema-header one-bottom-px">
                     <h2>影院</h2>
                     <span class="iconfont">&#xe62a;</span>
                 </div>
                 <div class="cinema-content">
                     <div class="cinema-filter">
                         <p>全部区域、服务</p>
                         <span>筛选
                             <i class="iconfont">&#xe635;</i>
                        </span>
                     </div>
                     <div class="cinema-list-wrapper" ref="cinemas">
                         <div>
                            {cinemaHtml}
                        </div>    
                     </div>
                 </div>
             </div>
         )
     }
    componentWillMount(){
        getCinemaData().then((result)=>{
            //console.log(result)
            var districtCinemas = {};
            result.map((item,index)=>{
                var districtName = item.district.name;
                if(!districtCinemas[districtName]){
                    districtCinemas[districtName] = {
                        districtName : districtName,
                        cinemasList : [],
                        unFold : false
                    }
                }
                districtCinemas[districtName].cinemasList.push(item);
            })
            this.setState({cinemasData : districtCinemas},()=>{
                //console.log(this.state.cinemasData)
            })
            
        })
            
    }
    foldClick(key){
        let value = this.state.cinemasData[key];
        value.unFold = !value.unFold;
        this.setState({cinemasData : this.state.cinemasData})
    }


    componentDidMount(){
        this.cinemaScroller = new BScroll(this.refs.cinemas,{
            click:true
        })
        this.cinemaScroller.on("scrollStart",()=>{
            this.cinemaScroller.refresh();
        })
    }
 }