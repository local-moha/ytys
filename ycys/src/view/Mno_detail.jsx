import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getThemeId, date2Data, orderDate } from '../filters'
import mno_detailCreator from '../store/actionCreator/mno_detail'

export class Mno_detail extends Component {
    constructor(props) {
        super(props);
        this.mno = getThemeId(this.props.location.search);
        this.state = {

        }
    }
    render() {
        // console.log(this.props.mno_detail);
        return (
            <div>
                目的地详情页
            </div>
        )
    }
    componentDidMount() {
        let start_date = date2Data(orderDate(Date.now()));
        let end_date = date2Data(orderDate(Date.now() + 1000 * 60 * 60 * 24))
        if (localStorage.orderDate) {
            start_date = date2Data(JSON.parse(localStorage.orderDate).start_date)
            end_date = date2Data(JSON.parse(localStorage.orderDate).end_date)
        }
        this.props.getCommentData(this.mno);
        this.props.getRoomList(this.mno, start_date, end_date);
        this.props.getMasterData(this.mno);
        this.props.getRelateData(this.mno);
        console.log(this);
    }
}

const mapStateToProps = ({ mno_detail }) => ({
    mno_detail
})

const mapDispatchToProps = (dispatch) => ({
    getCommentData(mno) {
        dispatch(mno_detailCreator.asyncGetCommentData({ mno }))
    },
    getRoomList(mno, start_date, end_date) {
        dispatch(mno_detailCreator.asyncGetRoomList({ mno, start_date, end_date }))
    },
    getMasterData(mno) {
        dispatch(mno_detailCreator.asyncGetMasterData(mno))
    },
    getRelateData(mno) {
        dispatch(mno_detailCreator.asyncGetRelateData(mno))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Mno_detail)
