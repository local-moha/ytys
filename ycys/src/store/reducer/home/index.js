import homeInit from '../../state/home'
import homeType from '../../actionType/home'
export default function (state = homeInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    if (type === homeType.GET_THEME) {
        state.themeList = payload.themeList
    }
    return state
}