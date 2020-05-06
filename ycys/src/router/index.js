import Login from '../view/Login'
import Index from '../view/Index'
import Home from '../view/Home'
import Person from '../view/Person'
import Meisu from '../view/Meisu'
import Search from '../view/Search'
import GetCoupon from '../view/GetCoupon'
import Theme from '../view/Theme'
import Mno_detail from '../view/Mno_detail'
import Meisu from '../view/Minsu'
import Error from '../view/Error'
import Distribution from '../view/Distribution'
import Detail from '../view/Detail'
import DistributionIndex from '../view/DistributionIndex'
import Stock_list from '../view/Stock_list'
export default [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/distribution',
        component: DistributionIndex,
        childrens: [
            {
                path: '/distribution',
                component: Distribution,
                exact: true
            },
            {
                path: '/distribution/detail.html',
                component: Detail,
                // isAuthorization:true
            }
        ]
    },
    {
        path: '/index',
        component: Index,
        childrens: [
            {
                path: '/index/index.html',
                component: Home
            },

            {
                path: '/index/person.html',
                component: Person,
                exact: true,
                // isAuthorization: true
            },
        ]
    },
    {
        path: '/meisu',
        component: Meisu,
        childrens: [
            {
                path: '/meisu/search.html',
                component: Search
            },
            {
                path: '/meisu/getCoupon.html',
                component: GetCoupon,
                // isAuthorization: true
            },

            {
                path: '/meisu/theme.html',
                component: Theme
            },

            {
                path: '/meisu/mno_detail.html',
                component: Mno_detail
            },
            {
                path: '/meisu/stock_list.html',
                component: Stock_list
            },
        ]
    },
    {
        path: '/error',
        component: Error,

    },
]



