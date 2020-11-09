import React, { Component, Fragment } from 'react'
import find from './find.module.css'
import { Carousel } from 'antd-mobile';
import {getCommentList} from '@api/find'
import AdSwiper from '@components/ad_swiper'

class Find extends Component{
    constructor(){
        super()
        this.state={
            navData:[{text:'最热',img:'http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-hot_2a01f3a.png'},
            {text:'众测',img:'http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-zhongce_65770bc.png'},
            {text:'栏目',img:'http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-huati_624fa93.png'},
            {text:'最新',img:'http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-new_86b6c1f.png'},
        ],
        hotData:[{text:'# 晒穿搭，AJ11 CONCORD 领回家！！ #',img:'http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg'},
                {text:'# 限时下单 全场返利 #',img:'http://shihuo.hupucdn.com/appHome/201811/1020/95e951e28bf1a30b58c03204e11e16a6.jpg'},
                {text:'# 晒照赢新年康扣 #',img:'http://shihuo.hupucdn.com/column/201812/2919/08a6f969e4e07d33209b8ba948ed425c.png'},
                {text:'# 晒照赢新年康扣 #',img:'http://shihuo.hupucdn.com/column/201812/2919/08a6f969e4e07d33209b8ba948ed425c.png'}
        ],
        typeList:[
            {tag_id:283,text:'今日推荐',active:1},
            {tag_id:347,text:'篮球'},
            {tag_id:281,text:'视频'},
            {tag_id:270,text:'最新资讯'},
            {tag_id:318,text:'潮流风向'},
            {tag_id:273,text:'3C新奇特'},
            {tag_id:285,text:'潮鞋志'},
            {tag_id:136,text:'球鞋90秒'},
        ],
        commentList:[],
        imgData:['http://shihuo.hupucdn.com/appHome/201812/1300/0767ee290a165c7c519696b8c047436c.jpg?imageView2/2/w/750/h/268/interlace/1', 
                'http://shihuo.hupucdn.com/appHome/201812/0920/b42ed3c3eca82633072c47a1bf3b53a9.jpg?imageView2/2/w/750/h/268/interlace/1',
                 'http://shihuo.hupucdn.com/appHome/201811/1200/843bce9c5e893f33ccb55e1e7acd61fd.jpg?imageView2/2/w/750/h/268/interlace/1',
                'http://shihuo.hupucdn.com/appHome/201812/0920/b42ed3c3eca82633072c47a1bf3b53a9.jpg?imageView2/2/w/750/h/268/interlace/1',
                'http://shihuo.hupucdn.com/appHome/201812/1300/0767ee290a165c7c519696b8c047436c.jpg?imageView2/2/w/750/h/268/interlace/1'
                ]
        }
    }
    render(){
        let {imgData,navData,hotData,typeList,commentList} = this.state
        return (
            <Fragment>
                <AdSwiper/>
                {
                    imgData.length>0?<Carousel
                    autoplay={true}
                    infinite
                  >
                    {imgData.map((val,index) => (
                        <div className={find.swiper_item} key={index}>
                            <img className={find.swiperimg} src={val} alt=""/>
                        </div>
                    ))}
                  </Carousel>:''
                }
                <div className={find.nav}>
                    {
                        navData.map((item,index)=>{
                            return <div key={index} className={find.nav_item}>
                                <img src={item.img} alt="" className={find.nav_item_img}/>
                                <div className={find.nav_item_text}>{item.text}</div>
                            </div>
                        })
                    }
                </div>
                <div className={find.hot_title}>热门话题</div>
                <div className={find.hot}>
                    {
                        hotData.map((item,index)=>{
                            return <div key={index} className={find.hot_item}>
                                <img src={item.img} className={find.hot_item_img} alt=""/>
                                <span className={find.hot_item_text}>{item.text}</span>
                            </div>
                        })
                    }
                </div>
                <div className={find.type}>
                    {
                        typeList.map((item,index)=>{
                            return <div onClick={this.changeTypeFun.bind(this,index)} className={item.active?find.type_item_active:find.type_item} key={index}>
                                    {item.text}
                            </div>
                        })
                    }
                </div>
                <div className={find.list}>
                    {
                        commentList.map((item,index)=>{
                            return <div key={index} className={find.list_item}>
                                <div className={find.list_item_top}>
                                    <img src={item.data.avatar} alt="" className={find.list_item_top_avatar}/>
                                    <div>
                                        <div className={find.list_item_author_name}>{item.data.author_name}</div>
                                        <div className={find.list_item_date}>{item.data.date}</div>
                                    </div>
                                </div>
                                <div className={find.list_item_middle}>
                                    <div className={find.list_item_title}>{item.data.title}</div>
                                    <img src={item.data.img} alt="" className={find.list_item_img}/>
                                    <div className={find.list_item_tags}>
                                        <div className={find.list_item_tags_item}>
                                            <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/like_537e53f.png" alt=""/>
                                            <span>{item.data.praise}</span>
                                        </div>
                                        <div className={find.list_item_tags_item}>
                                            <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/say_348570f.png" alt=""/>
                                            <span>{item.data.reply_count}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </Fragment>
        )
    }
    getCommentsData(index){
        getCommentList({tag_id:index}).then(res=>{
            this.setState({
                commentList:res.data
            })
        })
    }
    componentDidMount(){
        this.getCommentsData(this.state.typeList[0].tag_id)
    }
    changeTypeFun(index){
        var arr = this.state.typeList
        arr.forEach((item,ids)=>{
            if(ids===index){
                item.active=1
            }else{
                item.active = 0
            }
        })
        this.setState({
            typeList:arr
        })
        this.getCommentsData(arr[index].tag_id)
    }
}

export default Find