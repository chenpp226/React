import React, { Component } from 'react'
import BScroll from 'better-scroll'
import { getFilmDetail } from '../service/filmDetailService.js'

export default class FilmDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            filmInfo : {}
        }
    }

    render(){
        let filmDetailHeader = (
            <div class="film-detail-header one-bottom-px">
                <span class="iconfont" onClick={this.backBtnAction.bind(this)}>&#xe63d;</span>
                <h3>{this.state.filmInfo.name}</h3>
            </div>
        )
        // 影片海报图
        if(this.state.filmInfo.cover){
            var imgPath = this.state.filmInfo.cover.origin
        }
        //演员
        if(this.state.filmInfo.actors){
            var actor =[];
            var actorsArr = this.state.filmInfo.actors
            actorsArr.map((item,index)=>{
                return(
                    actor.push(<b key={index}> {item.name} | </b>)
                )
            })
        }
        //上映日期
        let showDate = new Date(this.state.filmInfo.premiereAt).toLocaleString().replace(/:\d{1,2}$/,' ');

        let filnDetailContent = (
            <div class="film-detail-content">
                <div class="film-detail-img">
                    <img src={imgPath}/>
                </div>
                <div class="introduce">
                    <h3>影片简介</h3>
                    <p>
                        <span>导演 : </span>
                        <i>{this.state.filmInfo.director}</i>
                    </p>
                    <p>
                        <span>主演 : </span>
                        <i>{actor}</i>
                    </p>
                    <p>
                        <span>地区语言 : {this.state.filmInfo.nation}({this.state.filmInfo.language})</span>
                        <i></i>
                    </p>
                    <p>
                        <span>类型 : {this.state.filmInfo.category}</span>
                        <i></i>
                    </p>
                    <p>
                        <span>上映日期 : {showDate}</span>
                        <i></i>
                    </p>
                    <p>{this.state.filmInfo.synopsis}</p>
                </div>
            </div>
        )
        return(
            <div id="film-detail" class="page">
                {filmDetailHeader}
                {filnDetailContent}
            </div>  
        )
    }
    componentWillMount(){
        let filmID = this.props.match.params.id;
        filmID = filmID.substr(1);
        //console.log(filmID)
        getFilmDetail(filmID).then((result)=>{
            this.setState({filmInfo : result})
        })
    }
    backBtnAction(){
        this.props.history.goBack();
    }

}
