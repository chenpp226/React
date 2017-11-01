import React, { Component } from 'react'
import BScroll from 'better-scroll'
import { getMallData, getMallHomePageData } from '../service/mallService.js'

export default class Mall extends Component{
    constructor({history}){
        super();
        this.history = history;
        this.state = {
            goodsList : []
        }
    }
     render(){
         return(
             <div id="mall" class="page">
                 <div class="mall-header">
                     <h2>商城</h2>
                     <span class="iconfont">&#xe656;</span>
                 </div>
                 <div class="mall-content" ref="mallList">
                     <div class="mallList-wrapper">
                         <h3>--好货精选--</h3>
                        <div class="mallList" >
                            <ul>
                                {
                                    this.state.goodsList.map((item,index)=>{
                                        let price = (item.skuList[0].price/100).toFixed(2)
                                        return(
                                            <li key={index} onClick={this.goodsDetailClick.bind(this,item.id)}>
                                                <img src={item.skuList[0].image} alt=""/>
                                                <h4>{item.masterName}</h4>
                                                <div>
                                                    <span>￥{price}</span>
                                                    <span>已售{item.displaySalesCount}</span>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                     </div>
                 </div>
             </div>
         )
     }
     goodsDetailClick(id){
        this.history.push("/goodsdetail:"+id)
     }
     componentWillMount(){
         getMallHomePageData().then((result)=>{
             this.setState({goodsList : result},()=>{
                 //console.log(this.state.goodsList)
             })
         })
     }
    componentDidMount(){
        this.mallScroller = new BScroll(this.refs.mallList,{
            click:true,
            wheel:false
        })
        this.mallScroller.on("scrollStart",()=>{
            this.mallScroller.refresh();
        })
    }
 }