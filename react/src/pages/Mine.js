import React, { Component } from 'react'
export default class Mine extends Component{
    constructor(){
        super();
        this.state = {
            mineNav : [
                {"icon":"\ue634","title":"影票订单"},
                {"icon":"\ue60e","title":"商城订单"},
                {"icon":"\ue677","title":"演出订单"}
            ],
            moneyNav : [
                {"icon":"\ue60a","title":"预售卡","r_icon":"\ue665"},
                {"icon":"\ue60d","title":"现金券","r_icon":"\ue665"},
                {"icon":"\ue65d","title":"余额","r_icon":"\ue665"}
            ]
        }
    }
     render(){
         return(
             <div id="mine" class="page">
                 <div class="login">
                     <div class="user-thumb">
                         <span class="iconfont">&#xe640;</span>
                     </div>
                     <h4>点击登陆</h4>
                     <i class="iconfont">&#xe634;</i>
                 </div>
                 <div class="mine-nav">
                     {
                         this.state.mineNav.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <span class="iconfont">{item.icon}</span>
                                    <i>{item.title}</i>
                                </li>
                            )
                         })
                     } 
                 </div>
                 <div class="center">
                     <span class="iconfont">&#xe630;</span>
                     <h4>会员中心</h4>
                     <span class="iconfont">&#xe665;</span>
                 </div>
                 <div class="card">
                     <span class="iconfont">&#xe630;</span>
                     <h4>卖座卡</h4>
                     <span class="iconfont">&#xe665;</span>
                 </div>
                 <div class="money">
                     {
                        this.state.moneyNav.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <span class="iconfont">{item.icon}</span>
                                    <div class="one-bottom-px">
                                        <h4>{item.title}</h4>
                                        <i class="iconfont">{item.r_icon}</i>
                                    </div>
                                </li>
                            )
                        }) 
                     }
                     
                 </div>
             </div>
         )
     }
 }