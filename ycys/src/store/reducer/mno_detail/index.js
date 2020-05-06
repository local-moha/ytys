import mno_detailType from '../../actionType/mon_detail'
import mon_detailInit from '../../state/mon_detail'
export default function (state = mon_detailInit, { type, payload }) {
    state = JSON.parse(JSON.stringify(state));
    if (type === mno_detailType.GET_COMMENT) {
        state.commentData = payload.commentData
    }
    if (type === mno_detailType.GET_ROOM_LIST) {
        state.roomList = payload.roomList
    }
    if (type === mno_detailType.GET_MASTER) {
        state.masterData = payload.masterData
    }
    if (type === mno_detailType.GET_RELATE) {
        state.relateData = payload.relateData
    }
    return state;
}