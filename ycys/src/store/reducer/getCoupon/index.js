import getCouponInit from '../../state/getCoupon'
import getCouponType from '../../actionType/getCoupon'
// console.log(getCouponInit);

export default function (state = getCouponInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))

    if (type === getCouponType.GET_COUPON) {
        state.template = payload.template
    }
    // console.log(state);
    return state
}