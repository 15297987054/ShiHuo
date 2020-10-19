import {fetch as fetchPro} from 'whatwg-fetch'

import qs from 'qs'
// const BASE_URL = 'http://m.shihuo.cn'
const get=(url,data)=>{
    if(data){
        var str = ''
        for(var key in data){
            str +="&"+key+"="+data[key]
        }
        url = url + "?" +str.slice(1)
    }
    console.log(url);
    var result = fetchPro('/api'+ url,{
        credentials:'include',
        headers:{
            "content-type":"application/json"
        }

    }).then(res=>res.json())
    return result
}

const post=(url,data)=>{
   var result =  fetchPro('/api'+ url,{
        method:'post',
        headers:{
            "content-type":"application/x-www-form-urlencoded"
        },
        body:qs.stringify(data)
    })
    return result
}

export default {
    get,
    post
}