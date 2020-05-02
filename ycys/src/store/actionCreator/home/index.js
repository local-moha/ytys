import homeType from '../../actionType/home'
import axios from 'axios'
function getTheme(themeList) {
    return {
        type: homeType.GET_THEME,
        payload: {
            themeList
        }
    }
}
function getSuper(superList) {
    return {
        type: homeType.GET_SUPER,
        payload: {
            superList
        }
    }
}
function getHotCity(hotCityList) {
    return {
        type: homeType.GET_CITY,
        payload: {
            hotCityList
        }
    }
}
function getCarousel(carouselList) {
    return {
        type: homeType.GET_CAROUSEL,
        payload: {
            carouselList
        }
    }
}
export default {
    asyncGetTheme() {
        return async (dispatch) => {
            const data = await axios.get("/meisu/banner/theme?_=" + Date.now())
            // console.log(data);
            const themeList = data.data.banner;
            dispatch(getTheme(themeList))
        }
    },
    asyncGetSuper() {
        return async (dispatch) => {
            const data = await axios.get("/meisu/team/team/index", {
                params: {
                    page: 1,
                    limit: 10,
                    _: Date.now()
                }
            })
            // console.log(data);
            const superList = data.data.list;
            dispatch(getSuper(superList))
        }
    },
    asyncGetHotCity() {
        return async (dispatch) => {
            const data = await axios.get("/meisu/v2/site/hot-city", {
                params: {
                    limit: 10,
                    _: Date.now()
                }
            })
            // console.log(data);
            const hotCityList = data.data.list;
            dispatch(getHotCity(hotCityList))
        }
    },
    asyncGetCarousel() {
        return async (dispatch) => {
            const data = await axios.get("/meisu/site/carousel", {
                params: {
                    _: Date.now()
                }
            })
            // console.log(data);
            const carouselList = data.data;
            console.log(carouselList);
            dispatch(getCarousel(carouselList))
        }
    },
}