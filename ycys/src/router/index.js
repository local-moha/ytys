import Login from '../view/Login'
import Index from '../view/Index'
import Home from '../view/Home'
import Superhotel_home from "../view/Superhotel_home";
import Superhotel_day from "../view/Superhotel_day";
import Super_detail from "../view/Superhotel_detail";
import Person from '../view/Person'
import Meisu from '../view/Meisu'
import Search from '../view/Search'
import GetCoupon from '../view/GetCoupon'
import Theme from '../view/Theme'
import Mno_detail from '../view/Mno_detail'
import Error from '../view/Error'
import Distribution from '../view/Distribution'
import Detail from '../view/Detail'
import Orderlist from '../view/Orderlist'
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
                isAuthorization: true
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
                path: '/index/superhotel_home.html',
                component: Superhotel_home,
                exact: true,
            },
            // {
            //     path:'/superhotel_home.html',
            //     component:Server
            // },
            {
                path: '/index/person.html',
                component: Person,
                exact: true,
                isAuthorization: true
            },
        ]
    },
    {
        path: '/meisu',
        component: Meisu,
        childrens: [
            //         {
            //             path:'/meisu/super_theme.html',
            //             component:Super_theme
            //         },
            //         {
            //             path:'/meisu/select_location',
            //             component:Select_location
            //         },
            {
                path: '/meisu/search.html',
                component: Search
            },
            {
                path: '/meisu/getCoupon.html',
                component: GetCoupon,
                // isAuthorization: true
            },
             //         {
            //             path:'/meisu/super_list.html',
            //             component:Super_list
            //         },
            //         {
            //             path:'/meisu/cutprice.html',
            //             component:Cutprice
            //         },

            {
                path: '/meisu/theme.html',
                component: Theme
            },
            //         {
            //             path:'/meisu/lowprice.html',
            //             component:Lowprice
            //         },
            {
                path: '/meisu/super_detail.html',
                component: Super_detail
            },
            //         {
            //             path:'/meisu/mno_list.html',
            //             component:Mno_list.html
            //         },
            {
                path: '/meisu/mno_detail.html',
                component: Mno_detail
            },
            {
                path: '/meisu/superhotel_day.html',
                component: Superhotel_day
            },
            //         {
            //             path:'/meisu/superhotel_detail.html',
            //             component:Superhotel_detail
            //         },
            {
                path:'/meisu/orderlist.html',
                component:Orderlist
            },
            {
                path: '/meisu/stock_list.html',
                component: Stock_list
            },
            //         {
            //             path:'/meisu/cutprice_orderlist.html',
            //             component:Cutprice_orderlist
            //         },
            //         {
            //             path:'/meisu/lowprice.html',
            //             component:Lowprice
            //         },
            //         {
            //             path:'/meisu/super_detail.html',
            //             component:Super_detail
            //         },

            //         {
            //             path:'/meisu/mno_list.html',
            //             component:Mno_list
            //         },
            //         {
            //             path:'/meisu/mno_detail.html',
            //             component:Mno_detail
            //         },
            //         {
            //             path:'/meisu/superhotel_day.html',
            //             component:Superhotel_day
            //         },

            //         {
            //             path:'/meisu/superhotel_detail.html',
            //             component:Superhotel_detail
            //         },
            //         {
            //             path:'/meisu/cutprice_orderlist.html',
            //             component:Cutprice_orderlist
            //         },
            //         {
            //             path:'/meisu/my_collect.html',
            //             component:My_collect
            //         },
            //         {
            //             path:'/meisu/my_coupon.html',
            //             component:My_coupon
            //         },
            //         {
            //             path:'/meisu/exchangeCoupon.html',
            //             component:ExchangeCoupon
            //         },
            //         {
            //             path:'/meisu/setting.html',
            //             component:Setting
            //         },
            //         {
            //             path:'/meisu/super_order.html',
            //             component:Super_order
            //         },
            //         {
            //             path:'/meisu/super_ordersubmit.html',
            //             component:Super_ordersubmit
            //         },
            //         {
            //             path:'/meisu/mno_order.html',
            //             component:Mno_order
            //         }
        ]
    },
    {
        path: '/error',
        component: Error,

    },
]



