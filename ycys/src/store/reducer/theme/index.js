import themeInit from '../../state/theme'
import themeType from '../../actionType/theme'
export default function (state = themeInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state));
    if (type === themeType.GET_THEME_DATA) {
        state.themeData = payload.themeData
    }
    return state;
}