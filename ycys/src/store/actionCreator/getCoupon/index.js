import getCouponType from '../../actionType/getCoupon'
import axios from 'axios'
function getCoupon(template) {
    return {
        type: getCouponType.GET_COUPON,
        payload: {
            template
        }
    }
}

export default {
    asyncGetCoupon() {
        return async (dispatch) => {
            const data = await axios.get("/minsu/voucher/list", {
                params: {
                    template_id: "Z4XEQE,0ZOTSW,YARQJ4,MB9PHT,BLSVE9",
                    _: Date.now()
                }
            })
            // console.log(data);
            const template = data.data.template;
            // console.log(template);
            dispatch(getCoupon(template))
        }
    },


}