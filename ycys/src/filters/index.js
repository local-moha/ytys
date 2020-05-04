const date = function (v) {
    if (v) {
        const time = new Date(v);
        return (time.getDate()).toString() + "天" +
            (time.getHours()).toString() + "小时" +
            (time.getMinutes()).toString() + "分"
    } else {
        return ""
    }
}
const changeArr = (arr, len = 10) => {
    const arr2 = [];
    for (let i = 0; i < arr.length; i += len) {
        arr2.push(arr.slice(i, i + len));
    }
    return arr2;
}
const getThemeId = (str) => {
    const newStr = str.split("=")[1]
    return newStr;
}
export {
    date,
    changeArr,
    getThemeId
}