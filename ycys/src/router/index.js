

export default router [
    {
        path:'/login',
        component:'Login'
    },
    {
        path:'/distribution',
        component:'Distribution',
    },
    {
        path:'/error',
        component:'Error'
    },
    {
        path:'/',
        component:'Minsu',
        childrens:[
           
            {
                path:'/super_theme.html',
                component:'Super_theme'
            },
            {
                path:'/select_location',
                component:'Select_location'
            },
            {
                path:'/search',
                component:'Search'
            },
            {
                path:'/getCoupon.html',
                component:'GetCoupon'
            },
            {
                path:'/stock_list.html',
                component:'Stock_list'
            },
            {
                path:'/super_list.html',
                component:'Super_list'
            },
            {
                path:'/cutprice.html',
                component:'Cutprice'
            },
            {
                path:'/theme.html',
                component:'Theme'
            },
            {
                path:'/lowprice.html',
                component:'Lowprice'
            },
            {
                path:'/super_detail.html',
                component:'Super_detail'
            },
            {
                path:'/mno_list.html',
                component:'Mno_list.html'
            },
            {
                path:'Mno_detail.html',
                component:'Theme'
            },
        //     {
        //         path:'/superhotel_day.html',
        //         component:'Superhotel_day'
        //     },
        //     {
        //         path:'/superhotel_detail.html',
        //         component:'Superhotel_detail'
        //     },
        //     {
        //         path:'/order_list.html',
        //         component:'Order_list'
        //     },
        //     {
        //         path:'/cutprice_orderlist.html',
        //         component:'Cutprice_orderlist'
        //     },
        //     {
        //         path:'/lowprice.html',
        //         component:'Lowprice'
        //     },
        //     {
        //         path:'/super_detail.html',
        //         component:'Super_detail'
        //     },

        //     {
        //         path:'/mno_list.html',
        //         component:'Mno_list'
        //     },
        //     {
        //         path:'/mno_detail.html',
        //         component:'Mno_detail'
        //     },
        //     {
        //         path:'/superhotel_day.html',
        //         component:'Superhotel_day'
        //     },
            
        //     {
        //         path:'/superhotel_detail.html',
        //         component:'Superhotel_detail'
        //     },
        //     {
        //         path:'/order_list.html',
        //         component:'Order_list'
        //     },
        //     {
        //         path:'/cutprice_orderlist.html',
        //         component:'Cutprice_orderlist'
        //     },
        //     {
        //         path:'/my_collect.html',
        //         component:'My_collect'
        //     },
        //     {
        //         path:'/my_coupon.html',
        //         component:'My_coupon'
        //     },
        //     {
        //         path:'/exchangeCoupon.html',
        //         component:'ExchangeCoupon'
        //     },
        //     {
        //         path:'/setting.html',
        //         component:'Setting'
        //     },
        //     {
        //         path:'/super_order.html',
        //         component:'Super_order'
        //     },
        //     {
        //         path:'/super_ordersubmit.html',
        //         component:'Super_ordersubmit'
        //     },
        //     {
        //         path:'/mno_order.html',
        //         component:'Mno_order'
        //     },
        ]
    }
]
export default  Nav = [
    {
        path:'/',
        component:'Home'
    },
    {
        path:'/superhotel_home.html',
        component:'Superhotel_home'
    },
    {
        path:'/server.html',
        component:'Server'
    },
    {
        path:'/person.html',
        component:'Person',
        isAuthorization:true
    },
]
