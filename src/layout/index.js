import React, { Component, Fragment } from 'react'
import Tabbar from '@components/tabbar'
import './index.css'
export default class Layout extends Component{
    constructor(){
        super()
        this.state={
            showBackToTopBtn:false
        }
    }
    render(){
        let {showBackToTopBtn} = this.state
        let flag = this.props.meta.flag
        return (
            <Fragment>
                {this.props.children}
                {flag?<Tabbar/>:''}
                {showBackToTopBtn? <div onClick={this.backToTop.bind(this)} className="backToTop iconfont iconxiangshangjiantouquan"></div>:''}
            </Fragment>
        )
    }
    scrollFun(){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        if(scrollTop>0){
            this.setState({
                showBackToTopBtn:true
            })
        }else{
            this.setState({
                showBackToTopBtn:false
            })
        }
    }
    shouldComponentUpdate(props,state){
        if(state.showBackToTopBtn === this.state.showBackToTopBtn){
            return false
        }else{
            return true
        }
    }
    backToTop(){
        document.body.scrollTop = 0
    }
    componentDidMount(){
        window.addEventListener('scroll',this.scrollFun.bind(this),true)
    }
}