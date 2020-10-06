import Loadable from 'react-loadable'
import Loading from '@common/loading'
const Home = Loadable({
    loader:()=>import('./home'),
    loading:Loading
})
const Equip = Loadable({
    loader:()=>import('./equip'),
    loading:Loading
})
const Discount = Loadable({
    loader:()=>import('./discount'),
    loading:Loading
})

const More = Loadable({
    loader:()=>import('./more'),
    loading:Loading
})
const Find = Loadable({
    loader:()=>import('./find'),
    loading:Loading
})

const Login = Loadable({
    loader:()=>import('./user/login'),
    loading:Loading
})

export {
    Home,
    Find,
    More,
    Equip,
    Discount,
    Login
}