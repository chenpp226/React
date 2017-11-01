import axios from 'axios'
import URL from '../url/urlApi.js'

//请求影片详情页数据
export function getFilmDetail(id){
    return new Promise((resolve,reject)=>{
        axios.get(`${URL.filmDetailApi}/${id}?__t=1508742327047`)
        .then((response)=>{
            //console.log(response.data.data.film)
            resolve(response.data.data.film)
        })
    })
}