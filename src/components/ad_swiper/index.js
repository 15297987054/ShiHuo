import { fetch } from 'whatwg-fetch'
import React, { Fragment } from 'react'
import adSwiper from './adSwiper.module.css'
import { Carousel } from 'antd-mobile';
class AdSwiper extends React.Component {
    constructor() {
        super()
        this.state = {
            swiper_data: [],
            flag: true
        }
    }
    render() {
        let { swiper_data, flag } = this.state
        return (
            <Fragment>
                {
                    swiper_data.length > 0 && flag ? <div style={{position:'relative'}}>
                        <div className={adSwiper.open}>
                            <a style={{color:'white'}} href="https://a.app.qq.com/o/simple.jsp?pkgname=com.hupu.shihuo&ckey=CK1436816620897">打开</a>
                        </div>
                        <i onClick={this.handleClose.bind(this)} className="iconfont iconcha" style={{ position: "absolute", top: 0, right: 0, zIndex: 10, color: 'white' }}></i>
                        <Carousel
                            autoplay={true}
                            infinite
                            autoplayInterval={2000}
                            dotStyle={{ backgroundColor: '#ccc', width: '10px', height: '2px'}}
                            dotActiveStyle={{ backgroundColor: '#ff4338', width: '10px', height: '2px' }}
                        >
                            {
                                swiper_data.map((item, index) => (
                                    <div className={adSwiper.item} key={index}>
                                        <div>
                                            <img className={adSwiper.itemImg} src={item.img} alt="" />
                                        </div>
                                        <div className={adSwiper.right}>
                                            <div className={adSwiper.title}>{item.title}</div>
                                            <div className={adSwiper.bottom}>
                                                <div className={adSwiper.now}>￥{item.nowPrice}</div>
                                                <div className={adSwiper.count}>{item.count}折</div>
                                                <div className={adSwiper.old}>￥{item.oldPrice}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div> : ''
                }

            </Fragment>
        )
    }
    handleClose() {
        this.setState({
            flag: false
        })
    }
    componentDidMount() {
        fetch('/ad_swiper/data').then(res => res.json()).then(res => {
            this.setState({
                swiper_data: res.list
            })
        })
    }
}

export default AdSwiper