import React, { Component } from 'react'
import BScroll from 'better-scroll'
import { getGoodsDetailBanner, getGoodsDetailInfo } from '../service/goodsDetailService.js'

export default class GoodsDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            goodsBannerInfo : {},
            goodsDetailInfo : []
        }
    }
    render(){
        if(this.state.goodsBannerInfo.skuList && this.state.goodsBannerInfo.skuList.length>0){
            var bannerPic = [];
            this.state.goodsBannerInfo.skuList[0].images.map((item,index)=>{
                bannerPic.push((
                    <div class="swiper-slide" key={index}>
                        <img src={item}/>
                    </div> 
                ))
                return bannerPic;
            })
            
            var goodsInfo = (
                <div class="goods-info">
                    <h3>{this.state.goodsBannerInfo.masterName}</h3>
                    <p>{this.state.goodsBannerInfo.slaveName}</p>
                    <i>￥{(this.state.goodsBannerInfo.skuList[0].price/100).toFixed(2)}</i>
                    <div class="deliver-box">
                        <span>快递 : 0.00 元</span>
                        <span>销量 : {this.state.goodsBannerInfo.displaySalesCount}</span>
                        <span>全国</span>
                    </div>
                </div>
            )
            var detailPic = [];
            this.state.goodsDetailInfo.map((item,index)=>{
                detailPic.push(
                    <img src={item} key={index}/>
                )
                return detailPic;
            })
            var detailInfo = (
                <div class="detail-info">
                    {detailPic}
                </div>
            )
        }
        return(
            <div id="goodsDetail" class="page">
                <div class="goods-detail-header one-top-px">
                    <span class="iconfont" onClick={this.backBtnAction.bind(this)}>&#xe63d;</span>
                    <h3>卖座商城</h3>
                </div>
                <div class="goods-detail-content" ref="goodsScroll">
                    <div>
                    <div class="goodsBanner swiper-container" ref="goodsBanner">
                        <div class="swiper-wrapper">
                            {bannerPic}
                            
                        </div>
                    </div>
                        
                        {goodsInfo}
                        {detailInfo}
                    </div>
                </div>
            </div>
            
        )
    }
    componentWillMount(){
        let goodsID = this.props.match.params.id;
        goodsID = goodsID.substr(1);
        //console.log(goodsID)
        getGoodsDetailBanner(goodsID).then((result)=>{
            this.setState({goodsBannerInfo : result},()=>{
                //console.log(this.state.goodsBannerInfo)
            })
        })
        getGoodsDetailInfo(goodsID).then((result)=>{
            this.setState({goodsDetailInfo : result},()=>{
               // console.log(this.state.goodsDetailInfo)
            })
        })

    }
    backBtnAction(){
        this.props.history.goBack();
    }
    componentDidMount(){
        this.swiper = new Swiper(this.refs.goodsBanner,{
            pagination : ".swiper-pagination",
            autoplay : 2000,
            loop : false
        })
        //this.swiper.update()
        this.goodsScroller = new BScroll(this.refs.goodsScroll,{
            click:true,
            wheel:false
        })
        this.goodsScroller.on("scrollStart",()=>{
            this.goodsScroller.refresh();
        })
    }
    componentDidUpdate(){
        this.swiper.update()
    }
}