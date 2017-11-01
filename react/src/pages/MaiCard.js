import React, { Component } from 'react'
export default class MaiCard extends Component{
     render(){
         return(
             <div id="maicard" class="page">
                 <div class="maicard-header one-bottom-px">
                     <h3>卖座卡查询</h3>
                     <span class="iconfont">&#xe6b9;</span>
                 </div>
                 <div class="maicard-content">
                     <img src="/dist/images/maicard.jpg"/>
                     <div>
                        <span class="iconfont">&#xe60a;</span>
                        <p>实体卡查询</p>
                        <span class="iconfont">&#xe665;</span>
                     </div>
                     <div>
                        <span class="iconfont">&#xe60a;</span>
                        <p>虚拟卡查询</p>
                        <span class="iconfont">&#xe665;</span>
                     </div>
                 </div>
             </div>
         )
     }
 }