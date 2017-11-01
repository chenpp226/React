import axios from 'axios'
import URL from '../url/urlApi.js'

//请求影院数据
export function getCinemaData(){
    return new Promise((resolve,reject)=>{
        axios.get(`${URL.cinemaApi}?__t=1508549194990`)
        .then((response)=>{
            //console.log(response.data.data.cinemas);
            resolve(response.data.data.cinemas);
        })
    })
}