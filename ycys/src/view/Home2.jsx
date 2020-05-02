import React, { Component } from 'react'
import { connect } from 'react-redux'
import homeCreator from '../store/actionCreator/home'
export class Home extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
    componentDidMount() {

    }
}

const mapStateToProps = ({ home }) => ({
    home
})

const mapDispatchToProps = (dispatch) => ({
    async getThemeList() {
        const data = await this.$axios.get("/meisu/banner/theme?_=" + Date.now())
        console.log(data);

    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
