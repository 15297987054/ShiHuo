import React, { Component, Fragment } from 'react'
import discount from  './discount.module.css'
import {fetch} from 'whatwg-fetch'
import AdSwiper from '@components/ad_swiper'
import '@mockData/discount'
import {discountData} from '@api/discount'
class Discount extends Component{
    constructor(){
        super()
        this.state={
            navData:[],
            brandData:[],
            r:999,
            goodsList:[],
            showMask:false,// 是否点击了更多tag
            tabs:[{text:'精选',active:1,r:999},{text:'鞋类',r:1},{text:'服饰',r:2},{text:'数码',r:3},{text:'兴趣',r:4}]
        }
    }
    componentDidMount(){
        fetch('/discount/navdata').then((res)=>res.json()).then(res=>{
            this.setState({
                navData:res.list
            })
        })
        fetch('/discount/brand').then(res=>res.json()).then(res=>{
            this.setState({
                brandData:res.list
            })
        })
        this.getData(999)
    }
    render(){
        let {navData,brandData,tabs,goodsList,showMask} = this.state
        return (
            <Fragment>
                <AdSwiper/>
                <div className={discount.input}>
                    <div className={discount.search}>
                        <span className="iconfont iconsousuo"></span>
                        <span> 安踏KT 篮球系列</span>
                    </div>
                </div>
                <div className={discount.more}>
                    <div>已收集10张优惠券</div>
                    <div className={discount.guide}>
                        <span>搜券指南</span>
                        <span className="iconfont iconjiantou"></span>
                    </div>
                </div>
                <div className={discount.sell}>
                    <div className={discount.sell_title}>
                        <div>品牌特卖</div>
                        <div className={discount.sell_title_right}>
                            <div>更多品牌</div>
                            <div className="iconfont iconjiantou" style={{marginTop:'2px'}}></div>
                        </div>
                    </div>
                    <div className={discount.sell_nav}>
                        {
                            navData.map((item,index)=>{
                                return <div key={index} className={discount.sell_nav_item}>
                                    <img src={item.img} className={discount.sell_nav_item_img} alt=""/>
                                    <div>{item.text}</div>
                                </div>
                            })
                        }
                    </div>
                    <div className={discount.brand}>
                        {
                            brandData.map((item,index)=>{
                                return <div style={{backgroundImage:'url('+item.bgimg+')',backgroundSize:'100% 100%'}} key={index} className={discount.brand_item}>
                                            <img src={item.img} alt="" className={discount.brand_img}/>
                                            <div>{item.text}</div>
                                            <div>折扣{item.count}折</div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div style={{border:'5px solid #f0f3f5'}}></div>
                <div className={discount.tabs}>
                        {
                            tabs.map((item,index)=>{
                                return <div key={index} onClick={this.changeTab.bind(this,item.r,index)} className={item.active?discount.tabs_active_item:discount.tabs_item}>
                                    <div className={discount.item_text}>{item.text}</div>
                                </div>
                            })
                        }
                        <div></div>
                       <div> 
                        {
                            showMask? <div id={discount.tabs_right} onClick={this.showMaskHandle.bind(this)} className="iconfont iconchangyongtubiao-xianxingdaochu-zhuanqu-"></div>:
                            <div id={discount.tabs_right} onClick={this.showMaskHandle.bind(this)} className="iconfont iconjiantou9"></div>
                        }
                       </div>
                </div>
                <div className={discount.list}>
                        {
                            goodsList.map((item)=>{
                                return <div key={item.id} className={discount.list_item}>
                                    <img src={item.img} alt="" className={discount.list_item_img}/>
                                    <div className={discount.list_item_right}>
                                        <div className={discount.list_item_right_title}>{item.title}</div>
                                        <div className={discount.list_item_right_subtitle}>{item.subtitle}</div>
                                        <div className={discount.list_item_right_bottom}>
                                            <div>{item.business}</div>
                                            <div>{item.date}</div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                </div>
            </Fragment>
        )
    }
    getData(r){
        var obj = {
            r: r,
            page: 1,
            page_size: 30,
            publish_date:''
        }
        discountData(obj).then(res=>{
            this.setState({
                goodsList:res.data
            })
        })
    }
    changeTab(r,index){
        var arr = this.state.tabs
        arr.forEach((item,ids)=>{
            if(index === ids){
                item.active = 1
            }else{
                item.active = 0
            }
        })
        this.setState({
            r:r,
            tabs:arr
        },()=>{
            this.getData(this.state.r)
        })
    }
    showMaskHandle(){
        this.setState({
            showMask:!this.state.showMask
        })
    }
}
export default Discount