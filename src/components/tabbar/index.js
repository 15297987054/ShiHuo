import React, { Component } from 'react'
import { TabbarWrapper } from './styled'
import { layoutRoutes } from '@router'
import { NavLink } from 'react-router-dom'
class Tabbar extends Component {
    render() {
        return (
            <TabbarWrapper>
                <ul>
                    {
                        layoutRoutes.map((item) => {
                            return (
                                <li key={item.key}>
                                    <NavLink to={item.path}>
                                    <i className={"iconfont " + item.icon}></i>
                                    {item.name} 
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </TabbarWrapper>
        )
    }
}

export default Tabbar