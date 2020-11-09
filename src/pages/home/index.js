import React, { Component } from 'react'
import { fetch } from 'whatwg-fetch'
import AdSwiper from '@components/ad_swiper'
import { Carousel,Toast } from 'antd-mobile'
import home from './home.module.css'
import Input from '../../components/search/input'
import { getHomeShopList } from '@api/home'
import saveDataToLocal from '@utils/localstorage'
import {connect} from 'react-redux'
import {ADD_GOODS_ACTION} from '@actions/shopcar'
import '@mockData/home'
class Home extends Component {
    constructor() {
        super()
        this.state = {
            bannerList: [
                'http://shihuo.hupucdn.com/appHome/201901/0810/e3e9e3e19c8ac46b699f554b3aca7538.jpg?imageView2/2/w/750/h/380/interlace/1',
                'http://shihuo.hupucdn.com/appHome/201901/0909/246bc13aad8b60058a81d242512e983f.png?imageView2/2/w/750/h/380/interlace/1',
                'http://shihuo.hupucdn.com/appHome/201901/0720/18cffc61c52a5ce61173479619bbaa6e.png?imageView2/2/w/750/h/380/interlace/1',
                'http://shihuo.hupucdn.com/appHome/201901/1010/5480e24dc886bde3fd4c599d22330d65.png?imageView2/2/w/750/h/380/interlace/1',
                'http://shihuo.hupucdn.com/appHome/201901/0500/d63108ffbf581d59f8d3552e346b8258.jpg?imageView2/2/w/750/h/380/interlace/1'
            ],
            showInput: false,
            middleData:[],//中部导航数据
            threeData:[],
            hotData:[],
            type:'',
            channel_type:'',
            flag:false,//控制是否上拉加载
            typeList:[{type:'',text:'推荐',active:true},{type:'basketball',text:'篮球'},{type:'running',text:'跑步'},{type:'fitness',text:'健身'},{type:'freestyle',text:'潮流'}],
            channel_typeList:[{channel_type:'',text:'全部',active:true},{channel_type:11,text:'单品推荐'},{channel_type:12,text:'原创精选'},{channel_type:7,text:'用户晒物'},],
            goodList:[]
        }
    }
    render() {
        let { bannerList, showInput,middleData,threeData,hotData,typeList,channel_typeList,goodList } = this.state
        return (
            <div>
                {
                    showInput ? <Input showIput={this.hanldeCancelInput.bind(this)} />:
                        <div>
                            <div>
                                <AdSwiper />
                                <div className={home.banner}>
                                    <div className={home.search}>
                                        <div onClick={this.hanldeShowInput.bind(this)} className={home.input}>
                                            <span className="iconfont iconsousuo"></span>
                                            <span className={home.input_text}>搜索商品、品牌</span>
                                        </div>
                                        <div onClick={this.toLogin.bind(this)} className="iconfont iconwode" style={{ fontSize: '30px', color: 'white', marginLeft: '20px' }}></div>
                                    </div>
                                    <Carousel
                                        autoplay={true}
                                        infinite
                                    >
                                        {
                                            bannerList.map((item, index) => {
                                                return <img src={item} key={index} alt=''></img>
                                            })
                                        }
                                    </Carousel>
                                </div>
                                <div className={home.navbox}>
                                        {
                                            middleData.map((item,index)=>{
                                                return <div className={home.navbox_item} key={index}>
                                                        <div className={home.navbox_item_left}>
                                                            <div className={home.navbox_item_left_title}>{item.title}</div>
                                                            <div className={home.navbox_item_left_subtitle}>{item.subtitle}</div>
                                                        </div>
                                                        <img className={home.navbox_item_right} src={item.img} alt=""/>
                                                    </div>
                                            })
                                        }
                                </div>
                                <div className={home.three}>
                                        {
                                            threeData.map((item,index)=>{
                                                return <div className={home.three_item} key={index}>
                                                    <div className={home.three_title}>{item.title}</div>
                                                    <div className={home.three_subtitle}>{item.subtitle}</div>
                                                    <img className={home.three_img} src={item.img} alt=""/>
                                                </div>
                                            })
                                        }
                                </div>
                                <h3 style={{padding:'10px 15px'}}>热门活动</h3>
                                <div className={home.hot}>
                                        {
                                            hotData.map((item,index)=>{
                                                return <div className={home.hot_item} key={index}>
                                                    <img className={home.hot_img} src={item.img} alt=""/>
                                                    <div className={home.hot_title}>{item.title}</div>
                                                    <div className={home.hot_subtitle}>{item.subtitle}</div>
                                                </div>
                                            })
                                        }
                                </div>
                                <div style={{height:'10px',background:'#f0f3f5'}}></div>
                                <div className={home.type_box}>
                                    {
                                        typeList.map((item,index)=>{
                                            return <div className={item.active?home.type_active:home.type} onClick={this.handleTypeChange.bind(this,index)} key={item.type}>
                                                {item.text}
                                            </div>
                                        })
                                    }
                                </div>
                                <div className={home.channel_type_box}>
                                    {
                                        channel_typeList.map((item,index)=>{
                                            return <div className={item.active?home.channel_type_active:home.channel_type} onClick={this.handleChannelTypeChange.bind(this,index)} key={item.channel_type}>
                                                {item.text}
                                            </div>
                                        })
                                    }
                                
                                </div>
                                <div className={home.goods_box}>
                                    {
                                        goodList.map((item,index)=>{
                                            return <div className={home.goods_item} key={index}>
                                                <img onClick={this.props.addGoodsTocar.bind(this,item.data)} className={home.goods_left} src={item.data.img} alt=""/>
                                                <div className={home.goods_item_right}>
                                                    <div className={home.goods_item_right_title}>{item.data.title}</div>
                                                    <div>
                                                        {
                                                            item.data.intro?<div  className={home.goods_item_right_middle}>
                                                            <img className={home.goods_item_right_middle_img} src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" alt=""/>
                                                            <div className={home.goods_item_right_middle_text}>{item.data.intro}</div>
                                                            <img className={home.goods_item_right_middle_img} src="http://sh1.hoopchina.com.cn/images/trademobile/quote_right.png" alt=""/>
                                                            </div>:''
                                                        }
                                                    </div>
                                                    <div>
                                                        {
                                                            item.data.avatar?<div  className={home.goods_item_right_bottom}>
                                                                <img className={home.goods_item_right_bottom_avatar} src={item.data.avatar} alt=""/>
                                                                <span className={home.goods_item_right_bottom_name}>{item.data.author_name}</span>
                                                            </div>:<div>
                                                                <span className={home.goods_item_right_bottom_name}>{item.data.merchant}</span>
                                                                <span className={home.goods_item_right_bottom_price}>{'￥'+item.data.price}</span>
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                }
            </div>
        )
    }
    // 登录
    toLogin(){
        if(saveDataToLocal.get('phone')){
            Toast.info('您已经登录过了~~~')
            return
        }
        this.props.history.push('/login')
    }
    //显示搜索
    hanldeShowInput() {
        this.setState({
            showInput: true
        })
    }
    //取消显示搜索
    hanldeCancelInput() {
        this.setState({
            showInput: false
        })
    }
    // 选择类型
    handleTypeChange(index){
        var arr = this.state.typeList
        arr.forEach((item,ids)=>{
            if(index===ids){
                item.active=true
            }else{
                item.active = false
            }
        })
        this.setState({
            typeList:arr,
            type:arr[index].type
        },()=>{
            getHomeShopList({pageSize:20,param_str:'',type:this.state.type,channel_type:this.state.channel_type}).then(res=>{
                this.setState({
                    goodList:res.data
                })
            })
        })
    }
    // 选择channel_type
    handleChannelTypeChange(index){
        var arr = this.state.channel_typeList
        arr.forEach((item,ids)=>{
            if(ids===index){
                item.active=true
            }else{
                item.active = false
            }
        })
        this.setState({
            channel_typeList:arr,
            channel_type:arr[index].channel_type
        },()=>{
            getHomeShopList({pageSize:20,param_str:'',type:this.state.type,channel_type:this.state.channel_type}).then(res=>{
                this.setState({
                    goodList:res.data
                })
            })
        })
    }
    // 上拉加载更多
    scrollFun(){
        var scrollHeight=document.body.scrollHeight
        var clientHeight = document.documentElement.clientHeight
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYoffset
        if(scrollHeight-clientHeight-scrollTop<50){
            if(this.state.flag) return
            this.setState({
                flag:true
            })
            getHomeShopList({pageSize:20,param_str:'',type:this.state.type,channel_type:this.state.channel_type}).then(res=>{
                var arr = this.state.goodList.concat(res.data)
                this.setState({
                    goodList:arr,
                    flag:false
                })
            })
        }
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.scrollFun.bind(this),true)
    }
    componentDidMount() {
        window.addEventListener('scroll',this.scrollFun.bind(this),true)  
        
        getHomeShopList({pageSize:20,param_str:'',type:'',channel_type:''}).then(res=>{
            this.setState({
                goodList:res.data
            })
        })
        fetch('/home/middle/nav/data').then(res=>res.json()).then(res=>{
            this.setState({
                middleData:res.list
            })
        })
        fetch('/home/three').then(res=>res.json()).then(res=>{
            this.setState({
                threeData:res.list
            })
        })
        fetch('/home/hot').then(res=>res.json()).then(res=>{
            this.setState({
                hotData:res.list
            })
        })
    }
}
const mapStateToProps=(state)=>({
    list:state.add.list
})
const mapDispatchToProps=(dispatch)=>({
    addGoodsTocar(val){
        if(!val.price){
            Toast.info('This is not for sell ~~~',1)
            return
        }
        let arr = []
        this.props.list.forEach((item)=>{
            arr.push(item.item_id)
        })
        if(arr.indexOf(val.item_id)>=0){
            Toast.info('此商品已经在您的购物车了~',1)
        }else{
            dispatch(ADD_GOODS_ACTION(val))
            Toast.info('添加购物车成功~',1)
        }
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)