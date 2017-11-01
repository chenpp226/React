import axios from 'axios'
import URL from '../url/urlApi.js'

//请求商品详情
//商品banner图
//https://aura.maizuo.com/api/item?id=12
export function getGoodsDetailBanner(id){
    return new Promise((resolve,reject)=>{
        axios.get(`${URL.goodsDetailApi}?id=${id}`).then((response)=>{
            //console.log(response.data.data)
           resolve(response.data.data)
        })
    })
}


//商品详情图及购买流程
//https://aura.maizuo.com/api/item/desc?id=12
export function getGoodsDetailInfo(id){
    return new Promise((resolve,reject)=>{
        axios.get(`${URL.goodsDetailApi}/desc?id=${id}`).then((response)=>{
           // console.log(response.data.data.desc)
           var str = response.data.data.desc ;
           //getGoodsInfoPic(str)
           resolve(getGoodsInfoPic(str))
            
        })
    })
    
}


function getGoodsInfoPic(str){
    var str1 = str.substring(str.indexOf("<img")+1)
    var arr1 = str1.split(" ")
    var finallArr = [];
    //console.log(arr1)
    for(let i=0; i<arr1.length; i++){
        var str2 = arr1[i];
        var arr2 = str2.split('="');
        //console.log(arr2);
        if(arr2[0]=="src"){
            var str3 = arr2[1].substring(0,arr2[1].indexOf('">'))
            //console.log(str3)
            finallArr.push(str3);
        }
    }
    //console.log(finallArr)
    return finallArr
}
