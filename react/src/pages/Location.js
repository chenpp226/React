import React, { Component } from 'react'
import { getLocationData } from '../service/homeservice.js'
import BScroll from 'better-scroll'


export default class Location extends Component{
    constructor({history}){
        super();
        this.history = history;
        this.state = {
            citiesA:[],
            citiesB:[],
            citiesC:[],
            citiesD:[],
            citiesE:[],
            citiesF:[],
            citiesG:[],
            citiesH:[],
            citiesI:[],
            citiesJ:[],
            citiesK:[],
            citiesL:[],
            citiesM:[],
            citiesN:[],
            citiesO:[],
            citiesP:[],
            citiesQ:[],
            citiesR:[],
            citiesS:[],
            citiesT:[],
            citiesU:[],
            citiesV:[],
            citiesW:[],
            citiesX:[],
            citiesY:[],
            citiesZ:[],
        }
    }
    render(){
        return(
            <div id="location" class="page">
                <div class="location-header one-bottom-px">
                    <span class="iconfont" onClick = {this.goBackBtn.bind(this)}>&#xe63d;</span>
                    <h3>城市选择</h3>
                </div>
                <div class="location-content" ref="location">
                    <div class="location-info-wrapper">
                        <div>
                            <p class="one-bottom-px info-title">A</p>
                            {
                                this.state.citiesA.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">B</p>
                            {
                                this.state.citiesB.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">C</p>
                            {
                                this.state.citiesC.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">D</p>
                            {
                                this.state.citiesD.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">E</p>
                            {
                                this.state.citiesE.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">F</p>
                            {
                                this.state.citiesF.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">G</p>
                            {
                                this.state.citiesG.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">H</p>
                            {
                                this.state.citiesH.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">I</p>
                            {
                                this.state.citiesI.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">J</p>
                            {
                                this.state.citiesJ.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">K</p>
                            {
                                this.state.citiesK.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">L</p>
                            {
                                this.state.citiesL.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">M</p>
                            {
                                this.state.citiesM.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">N</p>
                            {
                                this.state.citiesN.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">O</p>
                            {
                                this.state.citiesO.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">P</p>
                            {
                                this.state.citiesP.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">Q</p>
                            {
                                this.state.citiesQ.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">R</p>
                            {
                                this.state.citiesR.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">S</p>
                            {
                                this.state.citiesS.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">T</p>
                            {
                                this.state.citiesT.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">U</p>
                            {
                                this.state.citiesU.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">V</p>
                            {
                                this.state.citiesV.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">W</p>
                            {
                                this.state.citiesW.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">X</p>
                            {
                                this.state.citiesX.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">Y</p>
                            {
                                this.state.citiesY.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p class="one-bottom-px info-title">Z</p>
                            {
                                this.state.citiesZ.map((item,index)=>{
                                    return(
                                        <div key={index}>
                                            <p class="one-bottom-px">{item.name}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>


                </div>
            </div>
        )
    }

    componentWillMount(){
        getLocationData().then((result)=>{
            let arrA = [];
            let arrB = [];
            let arrC = [];
            let arrD = [];
            let arrE = [];
            let arrF = [];
            let arrG = [];
            let arrH = [];
            let arrI = [];
            let arrJ = [];
            let arrK = [];
            let arrL = [];
            let arrM = [];
            let arrN = [];
            let arrO = [];
            let arrP = [];
            let arrQ = [];
            let arrR = [];
            let arrS = [];
            let arrT = [];
            let arrU = [];
            let arrV = [];
            let arrW = [];
            let arrX = [];
            let arrY = [];
            let arrZ = [];
            result.map((item)=>{
                //console.log(item);
                if(item.pinyin[0] == "A"){
                    arrA.push(item);   
                }
                else if(item.pinyin[0] == "B"){
                    arrB.push(item);
                }
                else if(item.pinyin[0] == "C"){
                    arrC.push(item);
                }
                else if(item.pinyin[0] == "D"){
                    arrD.push(item);
                }
                else if(item.pinyin[0] == "E"){
                    arrE.push(item);
                }
                else if(item.pinyin[0] == "F"){
                    arrF.push(item);
                }
                else if(item.pinyin[0] == "G"){
                    arrG.push(item);
                }
                else if(item.pinyin[0] == "H"){
                    arrH.push(item);
                }
                else if(item.pinyin[0] == "I"){
                    arrI.push(item);
                }
                else if(item.pinyin[0] == "J"){
                    arrJ.push(item);
                }
                else if(item.pinyin[0] == "K"){
                    arrK.push(item);
                }
                else if(item.pinyin[0] == "L"){
                    arrL.push(item);
                }
                else if(item.pinyin[0] == "M"){
                    arrM.push(item);
                }
                else if(item.pinyin[0] == "N"){
                    arrN.push(item);
                }
                else if(item.pinyin[0] == "O"){
                    arrO.push(item);
                }
                else if(item.pinyin[0] == "P"){
                    arrP.push(item);
                }
                else if(item.pinyin[0] == "Q"){
                    arrQ.push(item);
                }
                else if(item.pinyin[0] == "R"){
                    arrR.push(item);
                }
                else if(item.pinyin[0] == "S"){
                    arrS.push(item);
                }
                else if(item.pinyin[0] == "T"){
                    arrT.push(item);
                }
                else if(item.pinyin[0] == "U"){
                    arrU.push(item);
                }
                else if(item.pinyin[0] == "V"){
                    arrV.push(item);
                }
                else if(item.pinyin[0] == "W"){
                    arrW.push(item);
                }
                else if(item.pinyin[0] == "X"){
                    arrX.push(item);
                }
                else if(item.pinyin[0] == "Y"){
                    arrY.push(item);
                }
                else if(item.pinyin[0] == "Z"){
                    arrZ.push(item);
                }
                
            })
            this.setState({citiesA : arrA})
            this.setState({citiesB : arrB})
            this.setState({citiesC : arrC})
            this.setState({citiesD : arrD})
            this.setState({citiesE : arrE})
            this.setState({citiesF : arrF})
            this.setState({citiesG : arrG})
            this.setState({citiesH : arrH})
            this.setState({citiesI : arrI})
            this.setState({citiesJ : arrJ})
            this.setState({citiesK : arrK})
            this.setState({citiesL : arrL})
            this.setState({citiesM : arrM})
            this.setState({citiesN : arrN})
            this.setState({citiesO : arrO})
            this.setState({citiesP : arrP})
            this.setState({citiesQ : arrQ})
            this.setState({citiesR : arrR})
            this.setState({citiesS : arrS})
            this.setState({citiesT : arrT})
            this.setState({citiesU : arrU})
            this.setState({citiesV : arrV})
            this.setState({citiesW : arrW})
            this.setState({citiesX : arrX})
            this.setState({citiesY : arrY})
            this.setState({citiesZ : arrZ})
        })
    }
    goBackBtn(){
        this.history.goBack();
    }
    componentDidMount(){
        this.locationScroller = new BScroll(this.refs.location,{
            click:true
        })
        this.locationScroller.on("scrollStart",()=>{
            this.locationScroller.refresh();
        })
    }
}