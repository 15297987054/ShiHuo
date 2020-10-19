import { fetch } from 'whatwg-fetch'
import React,{Fragment} from 'react'
import adSwiper from './adSwiper.module.css'
class AdSwiper extends React.Component {
    constructor() {
        super()
        this.state = {
            swiper_data: []
        }
    }
    render() {
        let { swiper_data } = this.state
        return (
            <Fragment>
                {
                    swiper_data.map((item,index) => (
                        <div className={adSwiper.item} key={index}>
                            <div>
                                <img  className={adSwiper.itemImg} src={item.img} alt=""/>
                            </div>
                            <div className="item-right">

                            </div>
                        </div>
                    ))
                }
            </Fragment>
        )
    }
    componentDidMount() {
        fetch('/ad_swiper/data').then(res => res.json()).then(res => {
            console.log(res.list);
            this.setState({
                swiper_data: res.list
            })
        })
    }
}

export default AdSwiper