import axios from 'axios'
import URL from '../url/urlApi.js'

//请求商城首页数据
export function getMallHomePageData(){
    return new Promise((resolve,reject)=>{
        axios.get(`${URL.mallListApi}?page=1&num=20`).then((response)=>{
            //console.log(response.data.data.list)
            resolve(response.data.data.list);
        })
    })
}

//请求商城数据
export function getMallData(){
    return new Promise((resolve,reject)=>{
        axios.get(`${URL.mallApi}`).then((response)=>{
            //console.log(response)
        })
    })
}