import Login from '../view/Login'
import Index from '../view/Index'
import Home from '../view/Home'
export default [
    {
        path: '/login',
        component: Login
    },
    // {
    //     path:'/distribution',
    //     component:Distribution
    // },
    // {
    //     path:'/error',
    //     component:Error
    // },
    {
        path: '/',
        exact: true,
        component: Index,
        childrens: [
            {
                path: '/',
                component: Home
            },
            // {
            //     path:'/superhotel_home.html',
            //     component:Superhotel_home
            // },
            // {
            //     path:'/superhotel_home.html',
            //     component:Server
            // },
            // {
            //     path:'/person.html',
            //     component:Person,
            //     isAuthorization:true
            // },
        ]
    },
    // {
    //     path:'/meisu',
    //     component:Meisu,
    //     childrens:[
    //         {
    //             path:'/meisu/super_theme.html',
    //             component:Super_theme
    //         },
    //         {
    //             path:'/meisu/select_location',
    //             component:Select_location
    //         },
    //         {
    //             path:'/meisu/search',
    //             component:Search
    //         },
    //         {
    //             path:'/meisu/getCoupon.html',
    //             component:GetCoupon
    //         },
    //         {
    //             path:'/meisu/stock_list.html',
    //             component:Stock_list
    //         },
    //         {
    //             path:'/meisu/super_list.html',
    //             component:Super_list
    //         },
    //         {
    //             path:'/meisu/cutprice.html',
    //             component:Cutprice
    //         },
    //         {
    //             path:'/meisu/theme.html',
    //             component:Theme
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
    //             component:Mno_list.html
    //         },
    //         {
    //             path:'/meisu/Mno_detail.html',
    //             component:Theme
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
    //             path:'/meisu/order_list.html',
    //             component:Order_list
    //         },
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
    //             path:'/meisu/order_list.html',
    //             component:Order_list
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
    //     ]
    // }
]



