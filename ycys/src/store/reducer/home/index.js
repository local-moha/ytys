import homeInit from '../../state/home'
import homeType from '../../actionType/home'
export default function (state = homeInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    if (type === homeType.GET_THEME) {
        state.themeList = payload.themeList
    }
    if (type === homeType.GET_SUPER) {
        state.superList = payload.superList
    }
    if (type === homeType.GET_CITY) {
        state.hotCityList = payload.hotCityList
    }
    if (type === homeType.GET_CAROUSEL) {
        state.carouselList = payload.carouselList
    }
    return state
}