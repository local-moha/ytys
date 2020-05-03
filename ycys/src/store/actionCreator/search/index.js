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
export default {
    asyncGetHotWord() {
        return async (dispatch) => {
            const data = await axios.get("/minsu/system/hot-word?_=" + Date.now())
            // console.log(data);
            const hotWord = data.data;
            console.log(hotWord);
            dispatch(getHotWord(hotWord))
        }
    },

}