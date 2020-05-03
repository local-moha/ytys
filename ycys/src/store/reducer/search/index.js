import searchInit from '../../state/search'
import searchType from '../../actionType/search'
export default function (state = searchInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state))
    if (type === searchType.GET_HOT_WORD) {
        state.hotWord = payload.hotWord
    }
    return state
}