import {
    Home,
    Find,
    More,
    Equip,
    Discount,
    Login
} from '@pages'

export const layoutRoutes = [
    {   
        key:'/home',
        path:'/home',
        name:'首页',
        icon:'iconshouye-',
        component:Home,
        exact:true,
        meta:{
            requireLogin:false,
            flag:true
        }
    },
    {   
        key:'/discount',
        path:'/discount',
        name:'优惠',
        icon:'iconyouhui',
        component:Discount,
        exact:true,
        meta:{
            requireLogin:false,
            flag:true
        }
    },
    {   
        key:'/find',
        path:'/find',
        name:'发现',
        icon:'iconfaxian',
        component:Find,
        exact:true,
        meta:{
            requireLogin:false,
            flag:true
        }
    },
    {   
        key:'/equip',
        path:'/equip',
        name:'装备',
        icon:'iconxie',
        component:Equip,
        exact:true,
        meta:{
            requireLogin:false,
            flag:true
        }
    },
    {   
        key:'/more',
        path:'/more',
        name:'更多',
        icon:'iconliebiao',
        component:More,
        exact:true,
        meta:{
            requireLogin:true,
            flag:true
        }
    }
]

export const noLayoutRoutes = [
    {   
        key:'/login',
        path:'/login',
        name:'登录',
        icon:'',
        component:Login,
        exact:true,
        meta:{
            requireLogin:false,
            flag:false
        }
    }
]

export const baseConfigRoutes = layoutRoutes.concat(noLayoutRoutes)