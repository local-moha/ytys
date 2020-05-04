import React, { Component } from 'react'
import { connect } from 'react-redux'
import searchCreator from '../store/actionCreator/search'
import style from '../assets/css/search.module.css'
export class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        // console.log(this.props.search);
        const { hotWord, suggestion } = this.props.search;
        console.log(suggestion);

        // const input = document.querySelector(".search_input__3NhJj");
        return (
            <div className={style.page}>
                <div className={style.searchInput}>
                    <div className={style.input_w}>
                        <input type="input" placeholder="景点/民宿/关键词" className={style.input} onChange={(e) => {
                            if (e.target.value) {
                                this.props.getSuggestionList(e.target.value);
                                document.querySelector(".search_clear_btn__3j60N").style.display = "block";
                                document.querySelector(".search_recommand__26qBV").style.display = "none";
                                document.querySelector(".search_search_content__ZXBcA").style.display = "block"
                            } else {
                                document.querySelector(".search_clear_btn__3j60N").style.display = "none";
                                document.querySelector(".search_recommand__26qBV").style.display = "block";
                                document.querySelector(".search_search_content__ZXBcA").style.display = "none";
                            }
                        }} />
                        <div className={style.clear_btn} style={{ display: "none" }} onClick={(e) => {
                            document.querySelector(".search_input__3NhJj").value = null;
                            e.target.style.display = "none";
                            document.querySelector(".search_recommand__26qBV").style.display = "block";
                            document.querySelector(".search_search_content__ZXBcA").style.display = "none";
                        }}></div>
                    </div>
                    <div className={style.cancel_btn} onClick={() => { this.props.history.push("/") }}>取消</div>
                </div>
                <div className={style.recommand} >
                    {
                        (
                            <div className={style.part_content} style={{
                                display: localStorage.searchHisList ? "block" : "none"
                            }} >
                                <div className={style.ovh}>
                                    <div className={style.history_word}>搜索记录</div>
                                    <div className={style.clear_history} onClick={(e) => {
                                        localStorage.removeItem("searchHisList");
                                        e.target.parentElement.parentElement.style.display = "none"
                                    }} >清空</div>
                                </div>
                                <div className={style.search_list}>
                                    {
                                        localStorage.searchHisList ? JSON.parse(localStorage.searchHisList).map((v, i) => (
                                            <div key={i} className={style.search_item} onClick={(e) => {
                                                // console.log(e.target.innerText);
                                                document.querySelector(".search_input__3NhJj").value = e.target.innerText;
                                                this.props.getSuggestionList(e.target.innerText);
                                                document.querySelector(".search_clear_btn__3j60N").style.display = "block";
                                                document.querySelector(".search_recommand__26qBV").style.display = "none";
                                                document.querySelector(".search_search_content__ZXBcA").style.display = "block"
                                            }}>{v}</div>
                                        )) : ""
                                    }
                                </div>

                            </div>
                        )
                    }

                    <div className={style.part_content} style={{ marginTop: "18px" }}>
                        <div className={style.hot_word}>近期搜索</div>
                        <div className={style.search_list}>
                            {
                                hotWord ? hotWord.map((v, i) => (
                                    <div key={i} className={style.search_item}
                                    //跳转mno_list.html?city_code=CN1701&city_name=杭州
                                    // onClick={() => {
                                    //     this.props.history.push({ pathname: "./mno_list.html/" })
                                    // }}
                                    >{v}</div>
                                )) : ""
                            }
                        </div>
                    </div>
                </div>
                <div className={style.search_content} style={{ display: "none" }}>
                    {
                        suggestion ? (
                            <div className={style.search_list}>
                                {
                                    suggestion.map((v, i) => (
                                        <div key={i} className={style.search_li} onClick={() => {
                                            let searchHisList = []
                                            if (localStorage.searchHisList) {
                                                searchHisList = JSON.parse(localStorage.searchHisList);
                                            }
                                            const search_val = document.querySelector(".search_input__3NhJj").value
                                            if (!searchHisList.includes(search_val)) {
                                                searchHisList.push(search_val)
                                            }
                                            // console.log(searchHisList);
                                            localStorage.searchHisList = JSON.stringify(searchHisList);
                                            //跳转mno_detail.html?mno=m5c74f7ee7334a
                                            // this.props.history.push({ pathname: "./mno_detail.html/?mno" + v.mno })
                                        }}>
                                            <div className={style.search_word}>
                                                {v.title}
                                            </div>
                                            <div className={style.search_address}>{v.subtitle}</div>
                                            {/* <div className={style.search_ishot}></div> */}
                                            <div className={style.search_price}>￥{v.desc}起</div>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : ""
                    }

                </div>

            </div >
        )
    }
    componentDidMount() {
        // console.dir(document.querySelector(".search_input__3NhJj"));
        this.props.getHotWordList()
    }
}

const mapStateToProps = ({ search }) => ({
    search
})

const mapDispatchToProps = (dispatch) => ({
    getHotWordList() {
        dispatch(searchCreator.asyncGetHotWord())
    },
    getSuggestionList(keywords) {
        dispatch(searchCreator.asyncGetSuggestion(keywords))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
