import searchType from '../../actionType/search'
import axios from 'axios'
function getHotWord(hotWord) {
    return {
        type: searchType.GET_HOT_WORD,
        payload: {
            hotWord
        }
    }
}
function getSuggestion(suggestion) {
    return {
        type: searchType.GET_SUGGESTION,
        payload: {
            suggestion
        }
    }
}
export default {
    asyncGetHotWord() {
        return async (dispatch) => {
            const data = await axios.get("/minsu/system/hot-word?_=" + Date.now())
            // console.log(data);
            const hotWord = data.data;
            // console.log(hotWord);
            dispatch(getHotWord(hotWord))
        }
    },
    asyncGetSuggestion(keywords) {
        console.log(keywords);

        return async (dispatch) => {
            const data = await axios.get("/minsu/v2/site/suggestion", {
                params: {
                    keywords,
                    type: "2,3,4,5,6",
                    _: Date.now()
                }
            })
            // console.log(data);
            const suggestion = data.data.suggestions;
            // console.log(suggestion);
            dispatch(getSuggestion(suggestion))
        }
    },

}