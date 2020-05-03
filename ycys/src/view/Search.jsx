import React, { Component } from 'react'
import { connect } from 'react-redux'
import searchCreator from '../store/actionCreator/search'
export class Search extends Component {
    render() {
        console.log(this.props.search);
        return (
            <div>
                搜索页
            </div>
        )
    }
    componentDidMount() {
        this.props.getHotWordList()
    }
}

const mapStateToProps = ({ search }) => ({
    search
})

const mapDispatchToProps = (dispatch) => ({
    getHotWordList() {
        dispatch(searchCreator.asyncGetHotWord())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
