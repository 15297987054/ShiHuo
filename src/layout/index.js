import React, { Component, Fragment } from 'react'
import Tabbar from '@components/tabbar'
export default class Layout extends Component{
    render(){
        let flag = this.props.meta.flag
        return (
            <Fragment>
                {this.props.children}
                {flag?<Tabbar/>:''}
            </Fragment>
        )
    }
}