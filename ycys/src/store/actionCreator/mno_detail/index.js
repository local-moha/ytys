import mon_detailType from '../../actionType/mon_detail'
import axios from 'axios'
// import { orderDate, date2Data } from '../../../filters'
function getCommentData(commentData) {
    return {
        type: mon_detailType.GET_COMMENT,
        payload: {
            commentData
        }
    }
}
function getRoomList(roomList) {
    return {
        type: mon_detailType.GET_ROOM_LIST,
        payload: {
            roomList
        }
    }
}
function getMasterData(masterData) {
    return {
        type: mon_detailType.GET_MASTER,
        payload: {
            masterData
        }
    }
}
function getRelateData(relateData) {
    return {
        type: mon_detailType.GET_RELATE,
        payload: {
            relateData
        }
    }
}
export default {
    asyncGetCommentData({ mno, page = 1, limit = 1 }) {
        return async (dispatch) => {
            const data = await axios.get("/minsu/order/comment/index", {
                params: {
                    mno,
                    page,
                    limit,
                    _: Date.now()
                }
            })
            const commentData = data.data;
            dispatch(getCommentData(commentData))
        }
    },
    asyncGetRoomList({ mno, start_date, end_date }) {
        return async (dispatch) => {
            const data = await axios.get("/minsu/v1/master/room", {
                params: {
                    mno,
                    start_date,
                    end_date,
                    _: Date.now()
                }
            })
            const roomList = data.data;
            dispatch(getRoomList(roomList))
        }
    },
    asyncGetMasterData(mno) {
        return async (dispatch) => {
            const data = await axios.get("/minsu/master/detail", {
                params: {
                    mno,
                    _: Date.now()
                }
            })
            const masterData = data.data.master;
            dispatch(getMasterData(masterData))
        }
    },
    asyncGetRelateData(mno) {
        return async (dispatch) => {
            const data = await axios.get("/minsu/v3/master/relate", {
                params: {
                    mno,
                    _: Date.now()
                }
            })
            const relateData = data.data;
            // console.log(themeData);
            dispatch(getRelateData(relateData))
        }
    },
}