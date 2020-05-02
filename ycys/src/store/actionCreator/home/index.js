import homeType from '../../actionType/home'
export function getTheme(themeList) {
    return {
        type: homeType.GET_THEME,
        payload: {
            themeList
        }
    }
}