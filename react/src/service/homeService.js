import axios from 'axios'
import URL from '../url/urlApi.js'

//请求轮播图数据
export function getBannerData(){
    return new Promise((resolve,reject)=>{
        axios.get(`${URL.bannerApi}?__t=1508548688295`)
        .then((response)=>{
            //console.log(response.data.data.billboards);
            resolve(response.data.data.billboards);
        })
    })
}

//请求正在热映数据
export function getNowPlayingData(){
    return new Promise((resolve,reject)=>{
        axios.get(`${URL.nowPlayingApi}?__t=1508548688298&page=1&count=10`)
        .then((response)=>{
            //console.log(response.data.data.films);
            resolve(response.data.data.films);
        })
    })
}

//请求即将上映数据
export function getComingSoonData(){
    return new Promise((resolve,reject)=>{
        axios.get(`${URL.comingSoonApi}?__t=1508548688302&page=1&count=10`)
        .then((response)=>{
            //console.log(response.data.data.films);
            resolve(response.data.data.films);
        })
    })
}


//请求热门活动数据
export function getActivitiesData(){
    return new Promise((resolve,reject)=>{
       
    })
}

//请求地址数据
export function getLocationData(){
    return new Promise((resolve,reject)=>{
        axios.get(`${URL.addressApi}?__t=1508549123829`)
        .then((response)=>{
            //console.log(response.data.data.cities);
            resolve(response.data.data.cities);
        })
    })
}