import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import CacheRoute,{ CacheSwitch } from 'react-router-cache-route' // 实现页面的缓存
import Layout from '../layout'
// export default (routes) => {
//     const eachRoutes = (route) => {
//         return <Route
//             key={route.key}
//             path={route.path}
//             render={(props) => (
//                 <Fragment>
//                     <Route component={route.component}/>
//                     <Redirect to={route.children[0].path} />
//                     <Switch>
//                         {
//                             route.children.map((child) => {
//                                 if (child.children) {
//                                     return eachRoutes(child)
//                                 }
//                                 if (!route.meta.requireLogin || sessionStorage.getItem('token') || route.path === "/login") {
//                                     return <Layout {...child}>
//                                         <Route key={child.key} path={child.path} component={child.component} {...props} />
//                                     </Layout>
                                    
                                    
//                                 } else {
//                                     return <Redirect to={{ pathname: '/login', state: { from: child.path } }} />
//                                 }
//                             })
//                         }
//                     </Switch>
//                 </Fragment>
//             )} />
//     }

//     return routes.map((route) => {
//         if (route.children) {
//             return eachRoutes(route)
//         } else {
//             return <Route path={route.path} key={route.key} render={(props) => {
//                 if (!route.meta.requireLogin || sessionStorage.getItem('phone') || route.path === "/login") {
//                     return <Layout {...route}>
//                         <route.component key={route.key} {...props} />
//                     </Layout>
//                 } else {
//                     return <Redirect to={{ pathname: '/login', state: { from: route.path } }} />
//                 }
//             }} />
//         }
//     })
// }
// 实现页面的缓存
export default (routes) => {
    const eachRoutes = (route) => {
        return <CacheRoute
            key={route.key}
            path={route.path}
            render={(props) => (
                <Fragment>
                    <CacheRoute component={route.component}/>
                    <Redirect to={route.children[0].path} />
                    <CacheSwitch>
                        {
                            route.children.map((child) => {
                                if (child.children) {
                                    return eachRoutes(child)
                                }
                                if (!route.meta.requireLogin || sessionStorage.getItem('token') || route.path === "/login") {
                                    return <Layout {...child}>
                                        <CacheRoute key={child.key} path={child.path} component={child.component} {...props} />
                                    </Layout>
                                    
                                    
                                } else {
                                    return <Redirect to={{ pathname: '/login', state: { from: child.path } }} />
                                }
                            })
                        }
                    </CacheSwitch>
                </Fragment>
            )} />
    }

    return routes.map((route) => {
        if (route.children) {
            return eachRoutes(route)
        } else {
            return <CacheRoute path={route.path} key={route.key} render={(props) => {
                if (!route.meta.requireLogin || sessionStorage.getItem('token') || route.path === "/login") {
                    return <Layout {...route}>
                        <route.component key={route.key} {...props} />
                    </Layout>
                } else {
                    return <Redirect to={{ pathname: '/login', state: { from: route.path } }} />
                }
            }} />
        }
    })
}