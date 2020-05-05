import themeType from '../../actionType/theme'
import axios from 'axios'
function getThemeData(themeData) {
    return {
        type: themeType.GET_THEME_DATA,
        payload: {
            themeData
        }
    }
}
export default {
    asyncGetThemeData({ banner_id, start_date, end_date }) {
        return async (dispatch) => {
            const data = await axios.get("/minsu/banner/destination", {
                params: {
                    banner_id,
                    start_date,
                    end_date,
                    _: Date.now()
                }
            })
            const themeData = data.data;
            // console.log(themeData);
            dispatch(getThemeData(themeData))
        }
    }
}