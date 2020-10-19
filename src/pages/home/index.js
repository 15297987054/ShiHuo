import React, { Component } from 'react'
import {fetch} from 'whatwg-fetch'
import AdSwiper from '@components/ad_swiper'
import {getHomeShopList} from '@api/home'
import '@mockData/home'
class Home extends Component{
    render(){
        return (
            <div>
                <AdSwiper/>
            </div>
        )
    }
    componentDidMount(){
        // getHomeShopList({pageSize:20,param_str:'',type:'',channel_type:''})
        // fetch('/data').then(res=>res.json()).then(res=>{console.log(res);})
    }
}

export default Home